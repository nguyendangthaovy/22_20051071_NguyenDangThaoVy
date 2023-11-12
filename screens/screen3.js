import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const getAPI = () => {
    return fetch("http://6550cc327d203ab6626e2d7a.mockapi.io/cafe/menu")
      .then((respone) => respone.json())
      .then((data) => setMenu(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menu}
       
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image style={styles.img} source={{ uri: item.img }} />
            <View style={styles.info}>
              <Text style={{ alignItems: "stretch", fontSize: 25 }}>
                {item.name}
              </Text>
              <Text style={{ alignItems: "baseline", fontSize: 18 }}>
                {item.price}
              </Text>
              <View style={styles.info1}>
              <Image
                style={{ width: 15, height: 15, marginHorizontal: 200, bottom:25  }}
                source={require("../assets/tru.png")}
              />
              <Image
                style={{ width: 15, height: 15, marginHorizontal: 250, bottom:39 }}
                source={require("../assets/cong.png")}
              />

              </View>
            </View> 
          </View>
          
        )}
      />
      <View style={styles.view}>
        <Text style={{fontSize:18, color:"#FFF"}} onPress={() => navigation.navigate("Detail")}>GET STARTED</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 60,
    height: 60,
    margin: 8,
  },
  item: {
    flexDirection: "row",
  },
  info:{
    justifyContent: "space-between"
  },
  info1:{
    justifyContent: "space-around",
  },
  view: {
    flex:1,
    backgroundColor: "#00BDD6",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    width: 350,
    borderRadius: 10,
  },
});
export default Menu;
