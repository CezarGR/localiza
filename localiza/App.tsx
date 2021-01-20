import { StatusBar } from 'expo-status-bar';
import { useFonts, Righteous_400Regular} from '@expo-google-fonts/righteous';
import AppLoading from 'expo-app-loading'; 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './scr/Home';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Righteous_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="auto"/>
      <View style={styles.container}>
        <Home/>
        
      </View>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  container_2: {
    height: 200,
    top: 30,
    backgroundColor: 'red',
  
    justifyContent: 'center',
  },
  container_3: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 60,
  }
});
