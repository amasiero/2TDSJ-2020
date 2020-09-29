import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator, // Componente de Loading
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ContactListItem from '../components/ContactListItem';

import {fetchContacts} from '../utils/api';
import colors from '../utils/colors';
import store from '../store';
import getURLParams from '../utils/getURLParams';

const keyExtractor = ({phone}) => phone;

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenUrl = this.handleOpenUrl.bind(this);
  }

  static navigationOptions = ({navigation: {openDrawer}}) => ({
    title: 'Contatos',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.grey,
    },
    headerLeft: () => (
      <Icon
        name="menu"
        size={24}
        style={{color: colors.black, marginLeft: 10}}
        onPress={() => openDrawer()}
      />
    ),
  });

  state = {
    contacts: store.getState().contacts,
    loading: store.getState().isFetchingContacts,
    error: store.getState().error,
  };

  componentDidMount() {
    this.unsubscribe = store.onChange(() =>
      this.setState({
        contacts: store.getState().contacts,
        loading: store.getState().isFetchingContacts,
        error: store.getState().error,
      }),
    );

    fetchContacts()
      .then((result) =>
        store.setState({contacts: result, isFetchingContacts: false}),
      )
      .catch(console.error);

    Linking.addEventListener('url', this.handleOpenUrl);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenUrl);
    this.unsubscribe();
  }

  handleOpenUrl(event) {
    const {
      navigation: {navigate},
    } = this.props;
    const {url} = event;
    const params = getURLParams(url);

    if (params.name) {
      const queriedContact = store
        .getState()
        .contacts.find(
          (contact) =>
            contact.name.split(' ')[0].toLowerCase() ===
            params.name.toLowerCase(),
        );

      if (queriedContact) {
        navigate('Profile', {id: queriedContact.id});
      }
    }
  }

  renderContact = ({item}) => {
    const {id, name, avatar, phone} = item;
    const {
      navigation: {navigate},
    } = this.props;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigate('Profile', {id})}
      />
    );
  };

  render() {
    const {loading, contacts, error} = this.state;

    const contactsSorted = contacts.sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}
        {!loading && !error && (
          <FlatList
            data={contactsSorted}
            keyExtractor={keyExtractor}
            renderItem={this.renderContact}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
});
