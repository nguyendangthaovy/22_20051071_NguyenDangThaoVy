import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 300, height: 100 }}
        source={require("../assets/Image.png")}
      />

      <Image
        style={{ width: 300, height: 100 }}
        source={require("../assets/Image (1).png")}
      />

      <Image
        style={{ width: 300, height: 100 }}
        source={require("../assets/Image (2).png")}
      />
      <View style={styles.view}>
        <Text style={{fontSize:18, color:"#FFF"}} onPress={() => navigation.navigate("Detail")}>GET STARTED</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  view: {
    backgroundColor: "#00BDD6",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    width: 350,
    borderRadius: 10,
  },
});
