import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddContactScreen from "../screens/AddContactScreen";
import ContactListScreen from "../screens/ContactListScreen";
import { createStaticNavigation } from "@react-navigation/native";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";
import LoginScreen from "../screens/LoginScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

const TabNavigation = (addContact, contacts, loading) => {
  const ContactsTab = createNativeStackNavigator({
    screenOptions: {
      headerTitleAlign: "center",
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

  const MyTabs = createBottomTabNavigator({
    screenOptions: {
      tabBarActiveTintColor: "#a41034",
      headerShown: false,
      tabBarLabelStyle: {
        fontSize: 16,
        fontWeight: 300,
      },
      tabBarStyle: { height: 60 },
    },
    screens: {
      Contacts: {
        screen: ContactsTab,
        options: {
          tabBarIcon: ({ focused, color = "#a41034" }) => (
            <Icon
              name={`people-circle${focused ? "" : "-outline"}`}
              size={25}
              color={color}
            />
          ),
        },
      },
      Settings: {
        screen: SettingsScreen,
        options: {
          headerTitle: "Contact Detail",
          tabBarIcon: ({ focused, color = "#a41034" }) => (
            <Icon
              name={`options${focused ? "" : "-outline"}`}
              size={25}
              color={color}
            />
          ),
        },
      },
    },
  });

  const MySwitchNavigator = createNativeStackNavigator({
    screenOptions: { gestureEnabled: false },
    initialRouteName: "Login",
    screens: {
      Main: {
        screen: MyTabs,
        options: {
          headerShown: false,
        },
      },
      Login: {
        screen: LoginScreen,
        options: {
          headerShown: false,
        },
      },
    },
  });

  const tabNavig = createStaticNavigation(MySwitchNavigator);
  return tabNavig;
};

export default TabNavigation;
