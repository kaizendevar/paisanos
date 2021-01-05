import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://i.pinimg.com/564x/11/f6/28/11f6281c4e593589acc201dc5f705f9f.jpg" };

const Home = ({ navigation } : any) => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.backgroundImage}>
      <Text style={styles.title}>AMI</Text>
      <Text style={styles.subtitle}>showrooms</Text>
      <View style={styles.bottom}>
        <Text style={styles.textBottom}>Buscá showrooms por ubicación e intereses</Text>
        
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() =>
            navigation.navigate("Login")
          }
        >
          <Text style={styles.registerText}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    padding: 22
  },
  title: {
    color: "white",
    fontSize: 54,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: -10
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center"
  },  
  textBottom: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 60
  },
  registerButton: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    color: "white",
    fontSize: 25,    
    padding: 12,
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 30
  },
  registerText: {
    color: "white",
    fontSize: 20,    
    textAlign: "center",
    fontWeight: "600",
  }
});

export default Home;