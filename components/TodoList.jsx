import React, { useState } from "react";
import { View, Text } from "react-native";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  const { todos, filterValue } = props.data;

  const { navigation } = props.navigation;
  const [todoList, setTodoList] = useState(todos);
  const handleStatusChange = (updatedTodoItem, index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = updatedTodoItem;
    setTodoList(updatedTodoList);
  };

  let filterTodos = todos;

  if (filterValue == "doneTodos") {
    filterTodos = todos.filter((todo) => todo.isDone == true);
  } else if (filterValue == "notDone") {
    filterTodos = todos.filter((todo) => todo.isDone == false);
  }

  return (
    <View>
      {filterTodos?.map((todo, index) => (
        <TodoItem
          todoItem={todo}
          index={index}
          key={index}
          onStatusChange={handleStatusChange}
          navigation={navigation}
          todoList={todoList}
          setTodoList={setTodoList}
          setTodos={props.setTodos}
          todos={todos}
        ></TodoItem>
      ))}
    </View>
  );
}
