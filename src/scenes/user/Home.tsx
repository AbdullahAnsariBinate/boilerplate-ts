import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { Suspense } from "react";
import Container from "src/components/core-components/containers/Container";

type Props = {};

const Home = (props: Props) => {
  return (
    <Container>
      <TextInput placeholder="Hello " />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
