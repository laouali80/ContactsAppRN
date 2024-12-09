import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddContactScreen from "../screens/AddContactScreen";
import ContactListScreen from "../screens/ContactListScreen";
import { createStaticNavigation } from "@react-navigation/native";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import ContactListScreenRedux from "../screens/ContactListScreenRedux";

const ReduxCompNav = () => {
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
      },
      ContactList: {
        screen: ContactListScreenRedux,
        options: {
          headerTitle: "Contacts",
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

export default ReduxCompNav;
