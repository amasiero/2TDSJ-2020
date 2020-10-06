import React, {useEffect, useState, useReducer} from 'react';
import {SafeAreaView, Text, StyleSheet, Button, Dimensions} from 'react-native';

// const MeuComponente = (props) => <Text style={styles.text}>{props.nome}</Text>;

const ACTIONS = {
  INCREMENTAR: 'INCREMENTAR',
  DECREMENTAR: 'DECREMENTAR',
  ZERAR: 'ZERAR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENTAR:
      return state + 1;
    case ACTIONS.DECREMENTAR:
      return state - 1;
    case ACTIONS.ZERAR:
      return 0;
    default:
      return state;
  }
};

const App = () => {
  // let [contador, setContador] = useState(0);
  let [outroEstado, setOutroEstado] = useState(0);

  let [contador, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    console.log('Componente renderizado');
    return () => {
      console.log('Componente desmontado');
    };
  }, [outroEstado]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Nro de cliques: {contador} {/*| {outroEstado}*/}
      </Text>
      <Button
        style={styles.button}
        title="Incrementar"
        onPress={() => dispatch({type: ACTIONS.INCREMENTAR})}
      />
      <Button
        style={styles.button}
        title="Decrementar"
        onPress={() => dispatch({type: ACTIONS.DECREMENTAR})}
      />
      <Button
        style={styles.button}
        title="Zerar"
        onPress={() => dispatch({type: ACTIONS.ZERAR})}
      />
      <Button
        style={styles.button}
        title="Ver useEffect funcionando"
        onPress={() => setOutroEstado(outroEstado + 1)}
      />
    </SafeAreaView>
  );
  // return (
  //   <View style={styles.container}>
  //     <MeuComponente nome="Andrey Masiero" />
  //   </View>
  // );
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
