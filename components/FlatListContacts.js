import React from "react";
import { FlatList } from "react-native-web";
import Row from "./Row";

function FlatListContacts({ contacts }) {
  //   console.log(contacts);
  return (
    <FlatList renderItem={(obj) => <Row {...obj.item} />} data={contacts} />
  );
}

export default FlatListContacts;
