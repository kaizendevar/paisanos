import React from "react";
import { ImageBackground, StyleSheet, Text, View , Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ShopInstagram from "./ShopInstagram";
import ShopCoupons from "./ShopCoupons";
import ShopBanner from "./ShopBanner";

const ShopDetail = ({ route, navigation } : any) => {
  const backgroundImage = { uri: "https://i.pinimg.com/564x/4b/cc/3e/4bcc3ebd693d4317ed5935811b808e09.jpg" };
  const { shop } = route.params;
  const daysSplit = shop.openDays.split("-");
  let schedule = "";
  for (var indice in daysSplit) {
    schedule += `${daysSplit[indice].charAt(0).toUpperCase()}${daysSplit[indice].slice(1)} ${shop.openHour} a ${shop.closeHour} | `;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.overlay}></View>      
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <ShopBanner navigation={ navigation } shop={shop} />
        </ImageBackground>      
      </View>

      <View style={styles.mainContainer}>

        <View style={styles.logo}>
          <Image source={{ uri: shop.logo }} style={styles.imageLogo} resizeMode="cover" />
        </View>    

        <Text style={styles.title}>Horarios</Text>
        <Text style={styles.scheduleText}>
          {schedule}
        </Text>

        <Text style={styles.title}>Descripción</Text>
        <Text style={styles.descriptionText}>{shop.description}</Text>

        <ShopInstagram instagram={shop.instagram} />

        <ShopCoupons />
        
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    backgroundColor: "black"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    padding: 18
  },
  header: {
    height: 200
  },
  logo: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: -70,
    zIndex: 999,
    borderColor: "black",
    borderRadius: 150,
    width: 100,
    height: 100,    
  },
  imageLogo: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
  logoImage: {
    flex: 1,
    resizeMode: "contain",
    width: 150
  },
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 10,
    padding: 20
  },  
  title: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: "bold",
    color: "black"
  },
  scheduleText: {
    color: "black"
  },
  descriptionText: {
    color: "black"
  },
});

export default ShopDetail;