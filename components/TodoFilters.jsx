import React from "react";
import {  StyleSheet, View } from "react-native";
import { SegmentedButtons } from "react-native-paper";

export default function TodoFilters(props) {
  const [value, setValue] = React.useState("allTodos");
  props.getfiltedData(value);
  return (
    <View style={styles.todoFilters}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "allTodos",
            label: "All Todos",
          },
          {
            value: "doneTodos",
            label: "done todos",
          },
          { value: "notDone", label: "not done" },
        ]}
        onPress={(value) => setValue(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoFilters: {
    marginTop: 15,
  },
});
