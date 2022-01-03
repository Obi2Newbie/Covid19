/*import * as React from 'react';
import {View, Text} from 'react-native';

export default function HomeScreen ({navigation}) {

    return(
        <View style = {{
            flex:1, 
            alignItems: 'center',
            justifyContent: 'center'}}>
                <Text
                onPress={() => alert('jhjghh')}
                style={{fontSize: 26, fontWeight: 'bold'}}>
                 Home Screen   
                </Text>

        </View>
    );


}*/

import React, { useEffect, useCallback } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, ScrollView } from 'react-native';
import { useForm } from 'react-hook-form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from '../../firebase';


const Replace = ({ navigation }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate('LoginScreen');
      })
      .catch(error => alert(error.message));
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Text
          style={styles.box}
          onPress={() => navigation.navigate('')}>
          blqblq
        </Text>
        <Text
          style={styles.box}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
        <Text
          style={styles.box}
          onPress={() => navigation.navigate('Register')}>
          Test
        </Text>
        <Text
          style={styles.box}
          onPress={() => navigation.navigate('Register')}>
          blqblq
        </Text>
        <Text
          style={styles.box}
          onPress={() => navigation.navigate('Register')}>
          blqblq
        </Text>
        <Text
          style={styles.box}
          onPress={() => navigation.navigate('Register')}>
          blqblq
        </Text>
        <Text
          style={styles.box}
          onPress={handleSignOut}>
          Log Out
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


  },
  box: {
    textAlign: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 1,
    width: '95%',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    elevation: 20,
    shadowColor: '#52006A',

  },

  scrollView: {
    /*backgroundColor: 'white',*/
    marginHorizontal: 4,
  },


});

export default Replace;



