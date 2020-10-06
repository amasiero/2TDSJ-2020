import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';

const MeuComponente = (props) => <Text style={styles.text}>{props.nome}</Text>;

const App = () => {
  // let [contador, setContador] = useState(0);
  // let [outroEstado, setOutroEstado] = useState(0);
  // useEffect(() => {
  //   console.log('Componente renderizado');
  //   return () => {
  //     console.log('Componente desmontado');
  //   };
  // }, [contador]);
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.text}>
  //       Nro de cliques: {contador} | {outroEstado}
  //     </Text>
  //     <Button
  //       style={styles.button}
  //       title="Clique"
  //       onPress={() => setContador(contador + 1)}
  //     />
  //     <Button
  //       style={styles.button}
  //       title="Ver useEffect funcionando"
  //       onPress={() => setOutroEstado(outroEstado + 1)}
  //     />
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <MeuComponente nome="Andrey Masiero" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  button: {
    width: Dimensions.get('screen').width,
  },
});

export default App;
