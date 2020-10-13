import React, {
  useState,
  useEffect,
} from 'react';

import { Button, Text, TextInput, View } from 'react-native';
import auth from '@react-native-firebase/auth';

const App = (props) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged); // Quando o componente é montado
    return subscriber; // Quando for desmontado
  })

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <TextInput placeholder="Digite o email" value={email} onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder="Digite a senha" value={senha} onChangeText={(text) => setSenha(text)} />

        <Button onPress={() => auth().createUserWithEmailAndPassword(email, senha).then(() => {
          console.log('Usuário criado com sucesso')
        }).catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('O email já existe')
          } else if(error.code === 'auth/invalid-email') {
            console.log('Email inválido')
          }
          console.error(error)
        })} title="Cadastrar"/>
        <Button onPress={() => auth().signInWithEmailAndPassword(email, senha).then(() => setUser(email)).catch(error => console.log(error))} title="Entrar"/>
        <Button onPress={() => auth().signInAnonymously().then(user => setUser(user))} title="Entrar Anônimo"/>
      </View>
    );
  }

  return (
    <View>
      <Text>Olá usuário!</Text>
      <Button onPress={() => auth().signOut()} title="Sair"/>
    </View>
  );

}

export default App;