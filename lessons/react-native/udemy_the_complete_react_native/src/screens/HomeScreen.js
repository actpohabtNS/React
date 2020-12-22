import React from "react";
import { View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title={"My Info"}
        onPress={() => navigation.navigate("MyInfo")}
      />

      <Button
        title={"Friends List"}
        onPress={() => navigation.navigate("List")}
      />

      <Button
        title={"Images"}
        onPress={() => navigation.navigate("Images")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
