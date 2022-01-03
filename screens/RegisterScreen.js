
import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Text} from 'react-native';
import { useForm } from 'react-hook-form';
import {auth} from '../firebase';


const RegisterScreen = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Utilisateur');
      }
    })
    return unsubscribe;
  }, [])
  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }

  useEffect(() => {
    register('email');
    register('prenom');
    register('nom');
    register('adresse');
    register('password');

  }, [register]);
  const [value, setValue1] = React.useState('oui');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>


        <Text style={styles.title}>Veillez remplir les information suivant:</Text>

        <TextInput
          style={styles.input}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Votre adresse mail"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCompleteType="password"
          placeholder="Creer votre mots de passe"
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress = {handleSignUp} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Enregistrer</Text>
        </TouchableOpacity>
        <Text
          style={styles.registerTextStyle}
          onPress={() => navigation.navigate('Login')}>
          Se Connecter
        </Text>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    padding: 10,
    backgroundColor: '#a6e4d0',
    justifyContent: 'center',

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  radio: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'flex-start',
    padding: 10,
  },
  registerTextStyle: {
    color: '#184ecc',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
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
  scrollView: {
    /*backgroundColor: 'white',*/
    marginHorizontal: 4,
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

export default RegisterScreen;


