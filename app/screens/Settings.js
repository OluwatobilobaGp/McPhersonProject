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

import client_1 from './images/client-1.png';


const Settings = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
        
        <View>
            <Image source={client_1} style={styles.cli_img} />
            <Text>Bros Ben</Text>
        </View>
        
      <SafeAreaView>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Useless placeholder"
          keyboardType="Numeric"
        />
        
      <Button
        style={styles.button}
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />

      </SafeAreaView>

      <Text style={styles.text}> Want to go to Settings? </Text>


      <Button
        style={styles.button}
        title="Transfer"
        onPress={() => navigation.navigate("Transfer")}
      />

      <Text style={styles.text}> Want to go to Home? </Text>

      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignitems: "center",
    // justifyContent: "center",
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

  cli_img:{
    width: 70, 
    height: 70,
    borderRadius:20,
  },

  text: {
    textAlign: "center",
  },
});
