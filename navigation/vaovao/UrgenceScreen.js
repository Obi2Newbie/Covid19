import React, { useEffect, useCallback } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text} from 'react-native';
import { useForm } from 'react-hook-form';


const UrgenceScreen = () => {
  return(
    <View style={styles.container}>
      <Text>Luttons ensemble le covid </Text>
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
   justifyContent: 'center',
   backgroundColor: '#a6e4d0',


  },
}) ;
export default UrgenceScreen;