import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



export default function Home() {



  return (
   
        <View style={styles.container}>
        
                <View style={styles.container_text}>
                    <Text style={styles.text_titulo}>LOCALIZA</Text>        
                </View>
           
        
            <View style={styles.container_img}>
                <Image style={styles.img} source={require('../assets/img_map.png')}/> 
            </View>
         </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_text: {
    backgroundColor: '#C06A6A',
    height: 128.55,
    width: 350,
    borderRadius: 34,
    top: 160,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  text_titulo: {
    color: '#FFF',
    fontFamily: 'Righteous_400Regular',
    fontSize: 64,

  },
  container_img: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 40,
    zIndex: 0,
    height: 500,
    
   
    width: 100,
  },
  img: {
    borderRadius: 14,
    opacity: 0.5,
    
  }
});