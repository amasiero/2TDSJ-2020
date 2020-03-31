import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart as sHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as rHeart } from '@fortawesome/free-regular-svg-icons'

class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.header}>
          <Image
            style={styles.imgProfile} 
            source={{ uri : 'https://i.imgur.com/ZrDq6UQ.jpg' }} />
          <Text style={styles.username}>andreymasiero</Text>
        </View>
        <Image 
            style={styles.picture}
            source={{ uri : 'https://i.imgur.com/ZrDq6UQ.jpg' }} />
        <View style={styles.container}>
          <View style={styles.likeContainer}>
            <FontAwesomeIcon 
              icon={ false ? sHeart : rHeart }
              size={32}
              style={ false ? styles.heart : {} }/>
            <Text style={ styles.textLikes }>2 curtidas</Text>
          </View>
          <Text style={ styles.legend } numberOfLines={3}>
            <Text style={ styles.userPost}>andreymasiero</Text>
            Landscape painted on the surface of a cut log.
          </Text>
        </View>
      </>
    );
  }
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container : {
    padding : 16
  },
  header : {
    flexDirection : 'row',
    alignItems : 'center',
    padding : 16
  },
  heart : {
    color : 'red'
  },  
  imgProfile : {
    height : 48, 
    width : 48,
    borderRadius : 50,
    marginRight : 8 
  },
  legend : {
    paddingVertical : 8
  },  
  likeContainer : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  picture : {
    height : width,
    width : width
  },
  textLikes : {
    marginLeft: 8
  },  
  username : {
    fontFamily : Platform.OS === 'ios' ?
              'AveniNext-Regular' : 'Roboto',
    fontSize : 16
  },
  userPost : {
    fontWeight : 'bold',
    marginRight : 16 
  }
});

export default App;
