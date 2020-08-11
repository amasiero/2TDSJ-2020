import { Alert, StyleSheet, View, Image, TouchableHighlight, BackHandler, PermissionsAndroid } from 'react-native';
import React from 'react';

import Geolocation from 'react-native-geolocation-service';

import Status from './components/Status';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import ImageGrid from './components/ImageGrid';

import {
  createImageMessage,
  createTextMessage,
  createLocationMessage,
} from './utils/MessageUtils';

export default class App extends React.Component {

  state = {
    fullscreenImageId: null,
    messages: [
      createImageMessage('https://picsum.photos/300/300'),
      createTextMessage('Is Awesome!'),
      createTextMessage('React Native'),
      createLocationMessage({
        latitude: -23.594899,
        longitude: -46.686816
      }),
    ],
    isInputFocused: false,
  };

  componentDidMount() {
    this.subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        const {fullscreenImageId} = this.state;
        if(fullscreenImageId) {
          this.dismissFullscreenImage();
          return true;
        }
        return false;
      }
    );
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  dismissFullscreenImage = () => {
    this.setState({ fullscreenImageId : null});
  };

  handlePressMessage = ({ id, type }) => {
    switch (type) {
      case 'text':
        Alert.alert(
          'Deseja apagar esta mensagem?',
          'Você tem certeza que deseja apagar permanentemente essa mensagem?',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Excluir',
              style: 'destructive',
              onPress: () => {
                const {messages} = this.state;
                this.setState({
                  messages: messages.filter(message => message.id !== id),
                });
              }
            }
          ],
        );
        break;
      case 'image':
        this.setState({ 
          fullscreenImageId : id,
          isInputFocused: false,
        });
        break;
      default:
        break;
    }
  };

  renderMessageList() {
    const {messages} = this.state;

    return (
      <View style={ styles.content }>
        <MessageList 
          messages={ messages }
          onPressMessage={ this.handlePressMessage }
        />
      </View>
    );
  }

  renderFullscreenImage = () => {
    const { messages, fullscreenImageId } = this.state;

    if(!fullscreenImageId) return null;

    const image = messages.find(
      message => message.id === fullscreenImageId
    );

    if(!image) return null;

    const {uri} = image;

    return(
      <TouchableHighlight
        style={styles.fullscreenOverlay}
        onPress={this.dismissFullscreenImage}
      >
        <Image 
          style={styles.fullscreenImage} 
          source={{uri}}
        />
      </TouchableHighlight>
    )
  }

  handlePressImage = (uri) => {
    const { messages } = this.state;
    
    this.setState({
      messages: [
        createImageMessage(uri),
        ...messages
      ]
    });
  };

  renderInputMethodEditor() {
    return (
      <View style={ styles.inputMethodEditor }>
        <ImageGrid onPressImage={this.handlePressImage} />
      </View>
    );
  }

  handlePressToolbarCamera = () => {
    //...
  };

  handlePressToolbarLocation = async () => {
    const { messages } = this.state;

    const granted = await this.requestLocationPermission();

    if(granted) {
      Geolocation.getCurrentPosition((position) => {
        const { coords: { latitude, longitude } } = position;

        this.setState({
          messages:[
            createLocationMessage({latitude, longitude}),
            ...messages
          ],
        });
      });
    }

  };

  requestLocationPermission = async () => {
    try {
      
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          message: 'Você autoriza o MESSAGES acessar a localização do seu dispositivo?',
          buttonNegative: 'Negar',
          buttonPositive: 'PERMITIR',
        }
      );
      
      if(granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      return false;

    } catch (err) {
      console.warn(err);
    }
  }

  handleChangeFocus = (isFocused) => {
    this.setState({ isInputFocused: isFocused });
  };

  handleSubmit = (text) => {
    const { messages } = this.state;

    this.setState({
      messages: [createTextMessage(text), ...messages],
    });
  };

  renderToolbar() {
    const { isInputFocused } = this.state;

    return (
      <View style={ styles.toolbar }>
        <Toolbar 
          isFocused={isInputFocused}
          onSubmit={this.handleSubmit}
          onChangeFocus={this.handleChangeFocus}
          onPressCamera={this.handlePressToolbarCamera} 
          onPressLocation={this.handlePressToolbarLocation} 
          />
      </View>
    );
  }

  render() {
    return(
      <View style={ styles.container }>
        <Status />
        {this.renderMessageList()}
        {this.renderToolbar()}
        {this.renderInputMethodEditor()}
        {this.renderFullscreenImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: { 
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
  fullscreenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 2,
  },
  fullscreenImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});