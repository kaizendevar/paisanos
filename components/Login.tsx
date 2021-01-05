import React from "react";
import { ImageBackground, StyleSheet, Text, View , Image, TouchableOpacity } from "react-native";
import LoginButtons from "./buttons/LoginButtons";

const Login = ({ navigation } : any) => (
  <View style={styles.container}>
    <ImageBackground source={require("../assets/images/login.png")} style={styles.backgroundImage}>
      <View style={styles.overlay}></View>  
          
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/logo-app.png")} style={styles.logoImage} />
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Todos los showrooms, en un solo lugar.</Text>
        <TouchableOpacity>
          <Text style={styles.btnCreateAccount}>Registrarme con e-mail</Text>
        </TouchableOpacity>        
        <TouchableOpacity>
          <Text style={styles.accountText}>Ya tengo una cuenta</Text>
        </TouchableOpacity>        
      </View>

      <View style={styles.bottom}>
        <LoginButtons navigation={navigation} />
      </View>
      
      <View style={styles.lineBottom}></View>      
    </ImageBackground>
  </View>
);

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
    height: "125%",
    padding: 18
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  logoImage: {
    flex: 1,
    resizeMode: "contain",
    width: 150
  },
  mainContainer: {
    flex: 1
  },  
  mainText: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    width: 260,
    marginTop: -20,
    marginBottom: 20
  },
  btnCreateAccount: {
    backgroundColor: "white",
    color: "black",
    fontSize: 14,        
    textAlign: "center",    
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    padding: 12,
    fontWeight: "700"
  },  
  accountText: {
    marginTop: 16,
    color: "white",
    fontSize: 14,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20
  },  
  lineBottom: {
    position: "absolute",
    bottom: 8,
    backgroundColor: "yellow",
    alignSelf: "center",
    opacity: 0.2,
    width: 140,
    height: 4,
    borderRadius: 5
  }
});

export default Login;