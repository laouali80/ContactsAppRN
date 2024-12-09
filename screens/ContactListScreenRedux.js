import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import SectionListContacts from "../components/SectionListContacts";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
// import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { fetchContacts } from "../redux2024/reducers_or_slices/contactsSlice";
import { persistor } from "../redux2024/store";

const ContactListScreenRedux = (props) => {
  const navigation = useNavigation();

  const contacts = props.contacts;

  useEffect(() => {
    if (props.status === "pending") {
      props.getContacts();
    }
  }, [props.status, contacts, navigation]);

  // Use `useLayoutEffect` to set navigation options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={toggleAddContact} style={{ padding: 5 }}>
          <Text style={{ color: "#a41034" }}>Add</Text>
        </Pressable>
      ),
      headerLeft: () => (
        <Pressable onPress={handleLogout} style={{ padding: 5 }}>
          <Text style={{ color: "#a41034" }}>Logout</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  const toggleAddContact = () => {
    navigation.navigate("AddContact");
  };

  const handleLogout = async () => {
    await persistor.purge(); // Clear Redux-persist storage
    navigation.navigate("Login");
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Login" }], // Redirect to login screen
    // });
  };

  // <Icon name="refresh-outline" />;
  // console.log("hereeeeeeeeee", contacts);
  return (
    <>
      {props.status === "rejected" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Pressable
            onPress={props.getContacts}
            style={{ alignItems: "center" }}
          >
            <Icon name="refresh-outline" size={50} color="black" />
            <Text>Try Again</Text>
          </Pressable>
        </View>
      ) : props.status === "pending" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <SafeAreaView>
          <View>
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
      )}
      <StatusBar style="auto" />
    </>
    // <Text>test</Text>
  );
};

const globalStateToProps = (state) => ({
  contacts: state.contacts.contactsList,
  status: state.contacts.status,
});
export default connect(globalStateToProps, { getContacts: fetchContacts })(
  ContactListScreenRedux
);
