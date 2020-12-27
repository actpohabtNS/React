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

      <Button
        title={"Colors"}
        onPress={() => navigation.navigate("Colors")}
      />

      <Button
        title={"Color Creator"}
        onPress={() => navigation.navigate("ColorCreator")}
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
