import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import SectionListContacts from "../components/SectionListContacts";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
// import { useSelector } from "react-redux";

const ContactListScreenRedux = (props) => {
  const navigation = useNavigation();

  const contacts = props.contacts;

  // const contacts = useSelector((state) => state.contacts);
  // console.log(contacts);

  // Use `useLayoutEffect` to set navigation options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={toggleAddContact} style={{ padding: 5 }}>
          <Text style={{ color: "#a41034" }}>Add</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  const toggleAddContact = () => {
    navigation.navigate("AddContact");
  };

  // console.log("hereeeeeeeeee", contacts);
  return (
    <>
      {/* {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : ( */}
      <SafeAreaView>
        <View>
          {/* for switch navigation  */}
          {/* <Button title="Add contact" onPress={toggleAddContact} /> */}
          <SectionListContacts
            contacts={contacts}
            onSelectContact={(contact) => {
              navigation.navigate("ContactDetails", {
                phone: contact.phone,
                name: contact.name,
                contacts: contacts,
              });
            }}
          />
        </View>
      </SafeAreaView>
      {/* )} */}
      <StatusBar style="auto" />
    </>
    // <Text>test</Text>
  );
};

const globalStateToProps = (state) => ({
  contacts: state.contacts,
});
export default connect(globalStateToProps)(ContactListScreenRedux);
// export default ContactListScreenRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
