/*import React, { useEffect, useCallback } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text} from 'react-native';
import { useForm } from 'react-hook-form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Replace= ({ navigation }) => {

  return (
    <View style={styles.container}>

               <Text
              style={styles.box}
              onPress={() => navigation.navigate('Register')}>
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

export default Replace;*/
/*import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}*/

import * as React from 'react';
import MainContainer from '../navigation/MainContainer';

function UtilisScreen() {
  return(
    <MainContainer/>
  );
}

export default UtilisScreen;