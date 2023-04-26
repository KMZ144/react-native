import React, { useState, useEffect } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Dimensions } from "react-native";

export default function RemoveTodoDialog(props) {
  const {
    removeTodoDialogVisible,
    setRemoveTodoDialogVisible,
    todos,
    todoList,
    index,
    setTodoList,
    setTodos,
  } = props;
  let TodosFilterd = todos;

  const handleTodoRemove = () => {
    TodosFilterd = todos.filter((todo, arrIndex) => arrIndex !== index);

    setTodoList(TodosFilterd);
    setTodos(TodosFilterd);
    setRemoveTodoDialogVisible(false);
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  console.log(windowHeight, windowWidth);

  return (
    <View>
      <Modal
        visible={removeTodoDialogVisible}
        style={styles.modal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <Text>Are you sure you want to remove this todo Item?</Text>
          <View style={styles.Btnsconstainer}>
            <Button onPress={() => handleTodoRemove()}>Ok</Button>
            <Button onPress={() => setRemoveTodoDialogVisible(false)}>
              Cancel
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  Btnsconstainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 10,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 270,
    marginRight: 50,
    width: Dimensions.get("window").width,
  },
});
