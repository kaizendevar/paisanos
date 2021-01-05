import React from "react";
import { Text, View , Image, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginButtons({ navigation } : any) {
  return (
    <>
      <TouchableOpacity
        style={styles.btnLogin} 
        onPress={() =>
          navigation.navigate("Map")
        }
      >
        <View style={styles.btnContainer}>
              <Image source={require("../../assets/images/facebook.png")} style={styles.btnIcon} />
              <Text style={styles.btnText}>Ingresar con Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.btnLogin} 
        onPress={() =>
          navigation.navigate("Map")
        }
      >
        <View style={styles.btnContainer}>
              <Image source={require("../../assets/images/google.png")} style={styles.btnIcon} />
              <Text style={styles.btnText}>Ingresar con Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.btnLogin} 
        onPress={() =>
          navigation.navigate("Map")
        }
      >
        <View style={styles.btnContainer}>
              <Image source={require("../../assets/images/apple.png")} style={styles.btnIcon} />
              <Text style={styles.btnText}>Iniciar sesión con Apple</Text>
        </View>
      </TouchableOpacity>        
      <TouchableOpacity>
        <Text style={styles.recoverPasswordText}>Recuperar contraseña</Text>
      </TouchableOpacity>
    </>
  )
};

const styles = StyleSheet.create({
  btnLogin: {
    paddingLeft: 8,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    margin: 5
  },
  btnText: {
    color: "white",
    fontSize: 13
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5
  },
  btnIcon: {
    position: "absolute",
    left: 8,
    width: 20,
    height: 20
  },   
  recoverPasswordText: {
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "white",
    fontSize: 14
  },
});