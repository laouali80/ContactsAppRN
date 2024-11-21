import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import SectionListContacts from "../components/SectionListContacts";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const ContactListScreen = ({ route }) => {
  const navigation = useNavigation();

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

  // /* 2. Get the param */ , addContact, contacts, loading
  const { contacts, loading } = route.params;

  const toggleAddContact = () => {
    navigation.navigate("AddContact");
  };

  // console.log(navigation);
  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
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
      )}
      <StatusBar style="auto" />
    </>
    // <Text>test</Text>
  );
};

export default ContactListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
