import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { Suspense, useEffect } from "react";
import Container from "src/components/core-components/containers/Container";
import { fetchTodos, getTodo } from "src/store/slices/todo";
import { useDispatch, useSelector } from "react-redux";
type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();



  let data = useSelector((state) => state?.fetchTodo);
  console.log("🚀 ~ Home ~ data:", data);
  return (
    <Container>
      <Text>hh</Text>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
