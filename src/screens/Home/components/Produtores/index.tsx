import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import useProdutores from "../../../../hooks/useProdutores";
import Produtor from "../Produtor";

type HeaderProps = {
  header: any;
};

const Produtores = ({ header: Header }: HeaderProps) => {
  const [title, list] = useProdutores();

  const headerList = () => {
    return (
      <>
        <Header />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <Produtor {...item} />}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={headerList}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#464646",
  },
});

export default Produtores;
