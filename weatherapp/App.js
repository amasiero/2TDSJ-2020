import React from 'react';

import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import SearchInput from './components/searchInput';
import getImageForWeather from './helpers/getImageForWeather';
import { fetchLocationId, fetchWeather } from './helpers/api';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: ''
    }
  }

  componentDidMount() {
    this.handleUpdateLocation('São Paulo');
  }

  handleUpdateLocation = city => {
    if(!city) return;

    this.setState({ loading: true } , async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(locationId);

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature
        });
      } catch (error) {
        this.setState({
          loading: false,
          error: true
        });
      }
    });
    
    this.setState({ location: city });
  }

  renderWeather() {
    const {
      location,
      weather,
      temperature 
    } = this.state;
    return (
      <>
        <Image 
          style={styles.image} 
          source={getImageForWeather(weather)}
        />
        <Text style={[styles.largeText, styles.textStyle]}>
          { location }
        </Text>
        <Text style={[styles.smallText, styles.textStyle]}>
          { weather }
        </Text>
        <Text style={[styles.largeText, styles.textStyle]}>
          { Math.round(temperature) }&deg;
        </Text>
      </>
    );
  }

  renderInfo(error) {
    if(!error) {
      return this.renderWeather();
    }
    
    return (
      <Text style={[ styles.smallText, styles.textStyle ]}>
        Não foi possível carregar o clima para essa cidade.
      </Text>
    )
  }

  render() {
    const { 
      loading,
      error
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <ActivityIndicator
          animating={ loading }
          color='white'
          size='large'
        />
        {!loading && this.renderInfo(error)}
        <SearchInput 
          placeholder='Procure a cidade desejada'
          onSubmit={this.handleUpdateLocation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: 'white'
  },
  largeText: {
    fontSize: 40
  },
  smallText: {
    fontSize: 16
  },
  image: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
    marginBottom: 20
  }
});

export default App;
