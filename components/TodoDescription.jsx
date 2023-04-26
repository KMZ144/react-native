import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { Text, Button, Card } from "react-native-paper";
export default function TodoDescription({ navigation, route }) {
  const image = { uri: "/assets/rinnegan.png" };

  return (
    <Card>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
      />
      <Card.Title title={route.params.title} titleVariant="titleLarge" />
      <Card.Content>
        <Text variant="bodyLarge">{route.params.description}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({});
