import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Home = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
     
      <Text style={styles.balance}> NGN 4,050.01 </Text>

      <SafeAreaView style={styles.trans_btn}>
      <Button
          style={styles.button}
          title="Add Money +"
          onPress={() => navigation.navigate("Settings")}
        />

        <Button
          style={styles.button}
          title="Transfer ="
          onPress={() => navigation.navigate("Transfer")}
        />
      </SafeAreaView>

      <Button
          style={styles.button}
          title="Transfer ="
          onPress={() => navigation.navigate("Transfer")}
        />


      <SafeAreaView style={styles.trans_detail}>
        <View>
          <Text style={{fontWeight:'bold',}}>Bros Dan</Text>
          <Text>Tuesday, January, 20 2022</Text>
        </View>
        <View>
          <Text style={{fontWeight:'bold', color:'red'}}>-1,850</Text>
          <Text>2:22PM</Text>
        </View>
      </SafeAreaView>

      <SafeAreaView style={styles.trans_detail}>
        <View>
          <Text style={{fontWeight:'bold',}}>Dan Extus</Text>
          <Text>Tuesday, January, 20 2022</Text>
        </View>
        <View>
          <Text style={{fontWeight:'bold', color:'red'}}>-1,850</Text>
          <Text>2:22PM</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.trans_detail}>
        <View>
          <Text style={{fontWeight:'bold',}}>Debyy ecoter</Text>
          <Text>Tuesday, January, 20 2022</Text>
        </View>
        <View>
          <Text style={{fontWeight:'bold', color:'red'}}>-1,850</Text>
          <Text>2:22PM</Text>
        </View>
      </SafeAreaView>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignitems: "center",
    // justifyContent: "center",
  },

  balance: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
  },

  trans_btn: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  trans_detail: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingVertical:15,
  },

  input: {
    // Height
    height: 40,
    // Margin
    margin: 12,

    borderWidth: 1,
    padding: 10,
    // Set border Radius.
    borderRadius: 20,

    //Set background color of Text Input.
    backgroundColor: "#FFFFFF",
  },

  button: {
    margin: 12,
  },

  text: {
    textAlign: "center",
  },
});
