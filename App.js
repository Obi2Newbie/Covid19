import React, { useEffect } from 'react';
import { StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import OnboardingScreen from './screens/OnboardingScreen';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UtilisScreen from './screens/UtilisScreen';
/*import UrgenceScreen from './screens/UrgenceScreen';*/

const Stack = createNativeStackNavigator();

const MyStack = () => {
  
  return (
  <NavigationContainer>
  <Stack.Navigator headerNode="none">
  
  <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  <Stack.Screen name="LoginScreen" component={LoginScreen}/>
  <Stack.Screen name="Register" component={RegisterScreen}/>
  <Stack.Screen options={{headerShown: false}} name="Utilisateur" component={UtilisScreen}/>
 
  
  
  </Stack.Navigator>
  </NavigationContainer>
  
  );
  };



  /*const UtilisScreen = ({ navigation, route}) => {
    return (
    <View>
      <Button

        title="Allez sur mon profile"
        onPress={() =>
             navigation.navigate('Urgence')
          }
        />
      <Button/>
           
     </View>

 
 );

 };*/


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default MyStack;