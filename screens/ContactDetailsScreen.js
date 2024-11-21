import { View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ContactDetailsScreen = ({ route }) => {
  const navigation = useNavigation();

  // Getting the params
  const { phone, name, contacts } = route.params;

  // Use `useLayoutEffect` to set navigation options
  useLayoutEffect(() => {
    // Stack header settings
    navigation.setOptions({
      headerTitle: name,
    });
  }, [navigation, name]);

  const goToRandom = () => {
    const allContacts = contacts;
    const currentPhone = phone;
    let randomContact;
    while (!randomContact) {
      const randomIndex = Math.floor(Math.random() * allContacts?.length);
      if (allContacts[randomIndex].phone !== currentPhone) {
        randomContact = allContacts[randomIndex];
      }
    }

    //if we want the information to just update but not the screen
    navigation.navigate("ContactDetails", {
      name: randomContact.name,
      phone: randomContact.phone,
      contacts: contacts,
    });

    // if we want the screen to push and change to a new screen
    // navigation.push("ContactDetails", {
    //   name: randomContact.name,
    //   phone: randomContact.phone,
    //   contacts: contacts,
    // });
  };

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text>{phone}</Text>
      <TouchableOpacity style={{ margin: 10 }} onPress={goToRandom}>
        <Text>Go to random contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactDetailsScreen;
