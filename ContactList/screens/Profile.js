import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';

import colors from '../utils/colors';

export default class Profile extends React.Component {
  static navigationOptions = ({
    navigation: {
      state: {params},
    },
  }) => {
    const {
      contact: {name},
    } = params;
    return {
      title: name.split(' ')[0],
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.blue,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
    };
  };

  render() {
    const {
      navigation: {
        state: {params},
      },
    } = this.props;
    const {contact} = params;
    const {avatar, name, email, phone, cell} = contact;

    return (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailSection}>
          <DetailListItem icon="mail" title="Email" subtitle={email} />
          <DetailListItem icon="phone" title="Trabalho" subtitle={phone} />
          <DetailListItem icon="smartphone" title="Pessoal" subtitle={cell} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  detailSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});
