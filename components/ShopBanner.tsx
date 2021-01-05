import React from "react";
import { View , StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faEllipsisH, faHeart, faLink, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function ShopBanner({ navigation: { goBack }, shop } : any) {
  return (
    <>
      <View style={styles.navBarContainer}>
          <TouchableOpacity 
            style={styles.arrowBack}
            onPress={() =>
              goBack()
            }
          >
            <FontAwesomeIcon icon={ faArrowLeft } style={styles.icon} /> 
          </TouchableOpacity>
          <Text style={styles.titleText}>{shop.name}</Text>
          <Text>
            <FontAwesomeIcon icon={ faEllipsisH } style={styles.icon} /> 
          </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoText}>
          <FontAwesomeIcon icon={ faMapMarkerAlt } style={styles.icon} /> 
          <Text style={[styles.infoText, styles.address]}>{shop.shortAddress}</Text>
        </View>
        <View style={styles.infoText}>
          <FontAwesomeIcon icon={ faLink } style={styles.icon} /> 
          <Text style={styles.infoText}>{shop.url}</Text>
        </View>
      </View>

      <View style={styles.likesContainer}>
        <FontAwesomeIcon icon={ faHeart } style={styles.icon} size={24} /> 
        <Text style={styles.likesText}>{shop.likes}</Text>
      </View>
  </>
  )
};

const styles = StyleSheet.create({
  navBarContainer: {
    maxHeight: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  arrowBack: {
    color: "white",
  },
  titleText: {
    position: "absolute",
    left: 30,
    color: "white",
    fontSize: 22,
    fontWeight: "700"
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    maxHeight: 60
  },
  infoText: {
    maxHeight: 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    color: "white",    
    textDecorationLine: "underline"
  },
  address: {
    fontSize: 13
  },
  icon: {
    marginRight: 8,
    color: "white"
  },  
  likesContainer: {
    position: "absolute",
    left: 20,
    bottom: 10,
    height: 30,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },      
  likesText: {
    fontSize: 13,
    color: "white",
    bottom: 0
  },
});