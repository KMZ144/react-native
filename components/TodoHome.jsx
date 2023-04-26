import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Appbar, Card, IconButton } from "react-native-paper";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TodoHome(navigation) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    isDone: false,
  });

  const [filterValue, setfilterValue] = useState("");

  const handleFliterValue = (value) => {
    setfilterValue(value);
  };

  const addTodos = () => {
    setTodos([...todos, todo]);
    setTodo({ title: "", description: "", isDone: false });
  };

  useEffect(() => {
    AsyncStorage.getItem("todos").then((items) => {
      if (items) {
        setTodos(JSON.parse(items));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const data = {
    todos,
    filterValue,
  };

  return (
    <ScrollView>
      <View style={styles.todosBody}>
        <Text>Title</Text>
        <TextInput
          label="Enter Your Todo item "
          style={styles.todoInputs}
          value={todo.title}
          onChangeText={(todoTitle) => setTodo({ ...todo, title: todoTitle })}
        ></TextInput>
        <Text>Description</Text>

        <TextInput
          label="Enter Your Todo description "
          mode="outlined"
          style={styles.todoInputs}
          multiline
          numberOfLines={4}
          value={todo.description}
          onChangeText={(todoDiscription) =>
            setTodo({ ...todo, description: todoDiscription })
          }
        ></TextInput>
        <Button
          mode="contained"
          style={styles.addBtn}
          onPress={() => addTodos()}
          title="add todo Item"
        ></Button>
        <TodoFilters getfiltedData={handleFliterValue}></TodoFilters>
        <View>
          <TodoList
            data={data}
            navigation={navigation}
            setTodos={setTodos}
          ></TodoList>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  AppBar: {
    marginTop: 35,
  },
  todosBody: {
    margin: 12,
  },
  todoInputs: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  addBtn: {
    padding: 2,
  },
});
