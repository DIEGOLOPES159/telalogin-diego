import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ImageViewer from './src/componente/ImageViewer';

import {auth} from './src/config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const PlaceholderImage = require ("./assets/mario.png");

const onLoginClick = () =>{
  createUserWithEmailAndPassword (auth,'diegolopes@gmail.com', '12345678')
    .then((userCredential) => {

      const user = userCredential.user;

      console.log(user)

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });


}

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.texto}> Fazer o Login</Text>
        <ImageViewer style={styles.imagem} placeholderImageSource={PlaceholderImage} />
      </View>

      <View style={styles.containerButton}>

        <TextInput
          style={styles.input}
          placeholder="informe seu email"
        />
        <TextInput
          style={styles.input}
          placeholder="informe sua senha"
          keyboardType="numeric"
        />
      </View>

      
      <View style={styles.containerButton}>
        
      <TouchableOpacity
         style={styles.button}
         onPress={() => onLoginClick()}>
          <Text style={styles.buttonTitle}>Acessar</Text>
      </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
  },

  texto: {
    color: 'black',
    fontSize: 20,

    
  },

  imageContainer: {
    flex: 1/2,
    paddingTop: 40,
   
  },
  imagem:{
    width: 150,
  
  },
  containerButton:{
    flex: 1/2,
    width: '90%',
    paddingTop: 20,
    
  },
  input: {
    height: 40,
    margin: 14,
    borderWidth: 1,
    padding: 10,
    borderRadius: 60,

  },

  button: {
    backgroundColor: 'black',
    height: 20,
    width: '20%',
  },
  buttonTitle:{
    color: 'black',
    top: 10,
    left:130,

    




  }
  

  
});

