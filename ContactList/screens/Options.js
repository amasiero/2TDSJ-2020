import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DetailListItem from '../components/DetailListItem';
import colors from '../utils/colors';

export default class Options extends React.Component {
  static navigationOptions = ({navigation: {goBack}}) => ({
    title: 'Opções',
    headerStyle: {
      backgroundColor: 'white',
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
    },
    headerLeft: () => (
      <Icon
        name="close"
        size={24}
        style={{color: colors.black, marginLeft: 10}}
        onPress={() => goBack()}
      />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <DetailListItem title="Editar Perfil" />
        <DetailListItem title="Alterar Idioma" />
        <DetailListItem title="Sair" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
