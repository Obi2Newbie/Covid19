
import React, { useEffect, useCallback, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { useForm } from 'react-hook-form';
import {auth} from '../firebase';

const LoginScreen = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Utilisateur');
      }
    })
    return unsubscribe;
  }, [])
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message))
  }

  useEffect(() => {
    register('email');
    register('password');

  }, [register]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.container}>
        <Text style={styles.title}>Vous voulez connecter? Inserer votre adresse mail et mots de passe:

        </Text>


        <Text style={styles.text} >Votre adresse mail:</Text>


        <TextInput
          style={styles.input}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.text}>votre mots de passe:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCompleteType="password"
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={handleLogin} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Se Connecter</Text>
        </TouchableOpacity>
        <Text
          style={styles.registerTextStyle}
          onPress={() => navigation.navigate('Register')}>
          Nouveau ? S'enregistrer
        </Text>
      </View>


    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {


    flex: 1,
    padding: 24,
    backgroundColor: '#a6e4d0',
    justifyContent: 'center',



  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },


  registerTextStyle: {
    color: '#184ecc',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 28,
  },

  title: {


    color: "#20232a",
    textAlign: "center",
    fontSize: 24,
    fontWeight: 'bold',

  },

  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },

});

export default LoginScreen;

/*const LoginScreen = () => {
  return(
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
           title = "enregistrer"
           onPress= {()=> alert('vous etes enregistrer')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
   flex:1,
   alignItems: 'center',
   justifyContent: 'center'


  },
}) ;
export default LoginScreen;*/