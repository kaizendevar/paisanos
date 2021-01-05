import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CustomCallout({ shop } : any) { 
  return (
    <View style={styles.container}>
        <View style={styles.bubble}>
          <Text style={styles.imageContainer}>
            <Image source={{ uri: shop.logo }} style={styles.image} />
          </Text>   
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{shop.name}</Text>
            <Text style={styles.text}>{shop.categoryName}</Text>
            <Text style={styles.seeMore}>Ver más</Text>
          </View>                
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  bubble: {
    flex: 1,
    backgroundColor: "white",    
    width: 300,
    height: 150,
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 6,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    position: "relative",
    marginTop: -70,
    marginLeft: -10,
  },
  image: {
    width: 150,
    height: 150,
  },
  infoContainer: {
    flex: 1,    
    marginLeft: 5,
  },
  text: {
    marginBottom: 3,
  },
  seeMore: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
});