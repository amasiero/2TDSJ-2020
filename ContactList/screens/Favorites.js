import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {fetchContacts} from '../utils/api';
import colors from '../utils/colors';
import store from '../store';

import ContactThumbnail from '../components/ContactThumbnail';

const keyExtractor = ({phone}) => phone;

export default class Favorites extends React.Component {
  static navigationOptions = ({navigation: {openDrawer}}) => ({
    title: 'Favoritos',
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

  async componentDidMount() {
    const {contacts} = this.state;

    this.unsubscribe = store.onChange(() =>
      this.setState({
        contacts: store.getState().contacts,
        loading: store.getState().isFetchingContacts,
        error: store.getState().error,
      }),
    );

    if (contacts.length == 0) {
      const fetchedContacts = await fetchContacts();
      store.setState({
        contacts: fetchedContacts,
        isFetchingContacts: false,
      });
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  renderFavoriteThumbnail = ({item}) => {
    const {
      navigation: {navigate},
    } = this.props;
    const {id, avatar} = item;

    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigate('Profile', {id})}
      />
    );
  };

  render() {
    const {loading, contacts, error} = this.state;
    const favorites = contacts.filter((contact) => contact.favorite);

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Ocorreu um erro...</Text>}
        {!loading && !error && (
          <FlatList
            data={favorites}
            keyExtractor={keyExtractor}
            numColumns={3}
            contentContainerStyle={styles.list}
            renderItem={this.renderFavoriteThumbnail}
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
  list: {
    alignItems: 'center',
  },
});
