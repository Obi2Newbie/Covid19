
import React, { useEffect, useCallback } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text} from 'react-native';
import { useForm } from 'react-hook-form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton} from 'react-native-paper'


const Replace= ({ navigation }) => {

  return (
    <View style={styles.container}>

               <Text
              style={styles.box}
              onPress={() => navigation.navigate('Register')}>
              Register
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
</View>
);
};

const styles = StyleSheet.create({
  box:{
   textAlign: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
     fontSize: 18,
    fontWeight: '600',
    marginBottom: 1,
    width: '90%',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 10,
    elevation: 20,
    shadowColor: '#52006A',

  },
  
   
});

export default Replace;
