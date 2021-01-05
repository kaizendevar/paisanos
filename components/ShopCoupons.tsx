import React from "react";
import { View , StyleSheet, Text } from "react-native";
import Dash from "react-native-dash";

export default function ShopCoupons() {
  return (
    <>
        <Text style={styles.title}>Cupones</Text>
        <View style={styles.coupons}>

          <View style={styles.coupon}>
            <Text style={styles.couponTitle}>50% Off</Text>
            <Text style={styles.couponDescription}>
              Con este cupón accedés a un descuento exclusivo de AMI a utilizar en todas las prendas disponibles del showroom.
            </Text>
            <Text style={styles.couponButton}>Canjear</Text>
            <View style={styles.couponLineContainer}>
              <View style={styles.semiRadiusLeft}></View>
              <Dash style={styles.couponLine} dashColor="white" />
              <View style={styles.semiRadiusRight}></View>
            </View>
            <Text style={styles.couponTextBottom}>Ver términos y condiciones</Text>
          </View>

          <View style={styles.coupon}>
            <Text style={styles.couponTitle}>50% Off</Text>
            <Text style={styles.couponDescription}>
              Con este cupón accedés a un descuento exclusivo de AMI a utilizar en todas las prendas disponibles del showroom.
            </Text>
            <Text style={styles.couponButton}>Canjear</Text>
            <View style={styles.couponLineContainer}>
              <View style={styles.semiRadiusLeft}></View>
              <Dash style={styles.couponLine} dashColor="white" />
              <View style={styles.semiRadiusRight}></View>
            </View>
            <Text style={styles.couponTextBottom}>Ver términos y condiciones</Text>
          </View>

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
coupons: {
    flex: 1,
    width: "150%",
    flexDirection: "row",
    marginTop: 10,
    overflow: "hidden",
    position: "relative",
  },
  coupon: {
    flex: 1,
    backgroundColor: "#fd087d",
    height: 400,
    marginRight: 25,
  },
  couponTitle: {
    color: "white",
    marginTop: 20,
    fontSize: 50,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
  couponDescription: {
    color: "white",
    fontSize: 14,
    padding: 20,
    width: "100%",
    textAlign: "center",
  },
  couponButton: {
    marginTop: 60,
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "white",
    textAlign: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    borderRadius: 15,
    width: 120,
    height: 40,
    color: "black",
    fontWeight: "bold"
  },
  couponLineContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 35,
  },      
  semiRadiusLeft: {
    zIndex: 2,
    borderRadius: 150,
    backgroundColor: "white",
    position: "relative",
    left: -15,
    width: 30,
    height: 30,
  },
  couponLine: {
    flex: 1,
    flexDirection: "row",    
    width: "100%",
    position: "absolute",
    top: 15
  },
  semiRadiusRight: {
    zIndex: 2,
    borderRadius: 150,
    backgroundColor: "white",
    position: "absolute",
    right: -15,
    width: 30,
    height: 30,
  },  
  couponTextBottom: {
    width: "100%",
    position: "absolute",
    bottom: 10,
    textAlign: "center",
    color: "white",    
    textDecorationLine: "underline"
  }  
});