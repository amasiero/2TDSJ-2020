import React from 'react';
import { FlatList } from 'react-native';
import Post from './src/components/post/Post';
import data from './src/data/data';

class App extends React.Component {
  render() {
    return (
      <FlatList
        keyExtractor={item => item.picId.toString()}
        data={data.fotos}
        renderItem={ ({ item }) =>
          <Post foto={ item } />
        } />
    );
  }
}

export default App;
