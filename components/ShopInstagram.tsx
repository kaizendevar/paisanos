import React from "react";
import { View , Image, StyleSheet, Text } from "react-native";

export default function ShopInstagram({ instagram } : any) {
  return (
    <>
      <Text style={styles.title}>Instagram</Text>
      <Text style={styles.socialText}>@{instagram}</Text>
      <View style={styles.socialImages}>
        <Image 
          source={{ 
            uri: "https://i.pinimg.com/originals/58/26/28/582628728ebf0492ed871cb965d84ad7.jpg" 
          }} 
          style={styles.imageSocial} 
        />
        <Image 
          source={{ 
            uri: "https://i.pinimg.com/originals/58/26/28/582628728ebf0492ed871cb965d84ad7.jpg" 
          }} 
          style={styles.imageSocial}
        />
        <Image 
          source={{ 
            uri: "https://i.pinimg.com/originals/58/26/28/582628728ebf0492ed871cb965d84ad7.jpg" 
          }} 
          style={styles.imageSocial}
        />        
        <Image 
          source={{ 
            uri: "https://i.pinimg.com/originals/58/26/28/582628728ebf0492ed871cb965d84ad7.jpg" 
          }} 
          style={styles.imageSocial}
        />               
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: "bold",
    color: "black"
  },  
  socialText: {
    color: "black"
  },   
  socialImages: {
    flex: 1,
    maxHeight: 300,
    width: "200%",
    flexDirection: "row",
    marginTop: 10,
    overflow: "hidden",
    position: "relative"
  },
  imageSocial: {
    flex: 1,
    marginRight: 15,
    height: 180
  }, 
});