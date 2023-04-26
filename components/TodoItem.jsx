import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Card, IconButton, Text, TouchableRipple } from "react-native-paper";
import RemoveTodoDialog from "./RemoveTodoDialog";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TodoItem(props) {
  const {
    todoItem,
    index,
    navigation,
    todoList,
    setTodoList,
    todos,
    setTodos,
  } = props;
  const [todoItemStatus, setTodoItemStatus] = useState(todoItem.isDone);
  const [removeTodoDialogVisible, setRemoveTodoDialogVisible] = useState(false);

  useEffect(() => {
    setTodoItemStatus(todoItem.isDone);
  }, [todoItem]);

  const handleChecked = () => {
    const updatedTodoItem = { ...todoItem, isDone: true };
    todoItem.isDone = true;
    props.onStatusChange(updatedTodoItem, index);
  };

  const handleUnChecked = () => {
    const updatedTodoItem = { ...todoItem, isDone: false };
    todoItem.isDone = false;
    props.onStatusChange(updatedTodoItem, index);
  };

  // const handleDialog = () => {
  //   setRemoveTodoDialogVisible(true);
  // };
  return (
    <TouchableRipple
      onPress={() => navigation.navigate("TodoDescription", todoItem)}
    >
      <View>
        <View style={styles.todosBody} mode="contained">
          <View style={styles.header}>
            <Text variant="titleLarge">{todoItem.title}</Text>
            <View style={styles.btnsContainer}>
              {!todoItem.isDone ? (
                <IconButton
                  icon="check"
                  mode="contained"
                  onPress={() => handleChecked()}
                  style={styles.icons}
                  color={Colors.red500}
                />
              ) : (
                <IconButton
                  icon="close"
                  mode="contained"
                  onPress={() => handleUnChecked()}
                  style={styles.icons}
                />
              )}
              <IconButton
                icon="delete"
                mode="contained"
                onPress={() => setRemoveTodoDialogVisible(true)}
                style={styles.icons}
              />
            </View>
          </View>
          <Card.Content>
            <Text variant="bodyMedium">{todoItem.description}</Text>
          </Card.Content>
        </View>
        <RemoveTodoDialog
          removeTodoDialogVisible={removeTodoDialogVisible}
          todoItem={todoItem}
          index={index}
          setRemoveTodoDialogVisible={setRemoveTodoDialogVisible}
          todoList={todoList}
          setTodoList={setTodoList}
          todos={todos}
          setTodos={setTodos}
        ></RemoveTodoDialog>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  todosBody: {
    margin: 12,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 12,
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "black",
  },
  icons: {
    backgroundColor: "white",
    color: "black",
  },
});
