import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";

export default function Detail() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ justifyContent: "space-around", flexDirection: "row-reverse" }}
      >
        <Image
          style={{ width: 28, height: 28, top: 5 }}
          source={require("../assets/search.png")}
        />
        <Text style={styles.text}>Shops Near Me</Text>
      </View>
      <View style={{justifyContent: "space-around",
    alignItems: "center"}}>
        <Pressable onPress={() => navigation.navigate("Menu")}>
        <Image
          style={{ width: 350, height: 200 }}
          source={require("../assets/item2.png")}
        />
        </Pressable>

        <Image
          style={{ width: 350, height: 200 }}
          source={require("../assets/item2.png")}
        />

        <Image
          style={{ width: 350, height: 200 }}
          source={require("../assets/item3.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  text: {
    fontSize: 25,
    fontWeight:"bold",
    fontFamily: "Arial"
  },
});
