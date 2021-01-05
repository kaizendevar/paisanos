import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import axios from "axios";
import CustomCallout from "./CustomCallout";

const Map = ({ navigation } : any) => {
  const [ shops, setShops ] = useState<any[]>([]);  
 
  const showShopInfo = (shop: any) => {
    navigation.navigate("ShopDetail", { shop: shop });
  }  

  const LoginAPI = async () => {
    const API_URL = "https://api.amishowrooms.com/api/user/test/login";

    var bodyFormData = new FormData();
    bodyFormData.append("username", "c.dias@paisanoscreando.com");
    bodyFormData.append("password", "test123");

    const response = await axios({
      method: "post",
      url: API_URL,
      data: bodyFormData,
      headers: {"Content-Type": "multipart/form-data" }
    });

    const jwt_token = response.data.response.token;

    return jwt_token;
  }

  const fetchShops = async () => {
    const token = await LoginAPI();
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const API_URL = "https://api.amishowrooms.com/api/user/my-locations/near/shops?lat=-34.57018963954238&lon=-58.432203481662874";
    const response = await axios.get(API_URL, config);

    setShops(response.data.data.shops);
  };

  useEffect( () => { fetchShops() }, []);  

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: -34.57018963954238,
          longitude: -58.432203481662874,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
          {
          shops ? shops.map((shops, index) => (
          <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(shops.latitude),
                longitude: parseFloat(shops.longitude)
              }}
          >
            <Callout tooltip onPress={() => showShopInfo(shops)}>
              <CustomCallout shop={shops} />
            </Callout>
          </Marker>
          )) :
          <ActivityIndicator size="large" color={"#fff"} />
        } 
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "white",
  },
  map: {
    flex: 1,
  },
});

export default Map;