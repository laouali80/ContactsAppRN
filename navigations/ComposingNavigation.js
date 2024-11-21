import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddContactScreen from "../screens/AddContactScreen";
import ContactListScreen from "../screens/ContactListScreen";
import { createStaticNavigation } from "@react-navigation/native";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";
import LoginScreen from "../screens/LoginScreen";

const ComposingNavigation = (addContact, contacts, loading) => {
  const MyStackNavigator = createNativeStackNavigator({
    screenOptions: {
      headerTitleAlign: "center", // Ensures the title is centered
      headerTintColor: "#a41034",
    },
    initialRouteName: "ContactList",
    screens: {
      AddContact: {
        screen: AddContactScreen,
        options: {
          headerTitle: "Add Contact",
        },
        initialParams: {
          handleSubmit: addContact,
        },
      },
      ContactList: {
        screen: ContactListScreen,
        options: {
          headerTitle: "Contacts",
          headerLeft: null,
        },
        initialParams: {
          contacts: contacts,
          loading: loading,
        },
      },
      ContactDetails: {
        screen: ContactDetailsScreen,
        options: {
          headerTitle: "Contact Detail",
        },
      },
    },
  });

  const MySwitchNavigator = createNativeStackNavigator({
    screenOptions: { gestureEnabled: false, headerShown: false },
    initialRouteName: "Login",
    screens: {
      Main: {
        screen: MyStackNavigator,
      },
      Login: {
        screen: LoginScreen,
      },
    },
  });

  const composeNav = createStaticNavigation(MySwitchNavigator);
  return composeNav;
};

export default ComposingNavigation;
