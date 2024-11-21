import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddContactScreen from "../screens/AddContactScreen";
import ContactListScreen from "../screens/ContactListScreen";
import { createStaticNavigation } from "@react-navigation/native";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";

const StackNavigation = (addContact, contacts, loading) => {
  const Navig = createNativeStackNavigator({
    screenOptions: {
      headerTitleAlign: "center",
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

  const stackNav = createStaticNavigation(Navig);
  return stackNav;
};

export default StackNavigation;
