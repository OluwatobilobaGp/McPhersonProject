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

import client_1 from "./images/client-1.png";
import client_2 from "./images/client-2.png";

const Checkout = ({ navigation }) => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "bold" }}>
        New Transfer
      </Text>

      <SafeAreaView style={{ flex: 1, flexDirection:"row", justifyContent: "space-evenly", paddingVertical:25,}}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Image source={client_1} style={styles.cli_img} />
            <Text>Debyy ecoter</Text>
          </View>
        </View>

        <View>
          <View style={{ alignItems: "center" }}>
            <Image source={client_2} style={styles.cli_img} />
            <Text>Dan Extus</Text>
          </View>
        </View>

        <View>
          <View style={{ alignItems: "center" }}>
            <Image source={client_1} style={styles.cli_img} />
            <Text>Bros Ben</Text>
          </View>
        </View>

      </SafeAreaView>

      <Text style={{ fontSize: 15, textAlign: "left", fontWeight: "bold", paddingLeft:10, }}>
        Transfer to another wallet 
      </Text>
  
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="XXX-XXX-XXX-XXX"
          keyboardType="Numeric"
        />
      <Text style={styles.text}> Wants to go to Settings? </Text>

      <Button
        style={{fontSize:40, }}
        title="Proceed"
        onPress={() => navigation.navigate("completePayment")}
      />
      </SafeAreaView>


    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    // Height
    height: 60,
    fontSize:15,
    // Margin
    margin: 12,
    justifyContent:"center",
    backgroundColor:"#0f4a",

    borderWidth: 1,
    padding: 10,
    // Set border Radius.
    borderRadius: 20,

    //Set background color of Text Input.
    backgroundColor: "#FFFFFF",
  },

  cli_img: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },

  button: {
    margin: 30,
    fontSize:60,
    backgroundColor:"#fff",
  },

  text: {
    textAlign: "center",
  },
});
