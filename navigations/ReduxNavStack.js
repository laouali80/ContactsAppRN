import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddContactScreen from "../screens/AddContactScreen";
import ContactListScreenRedux from "../screens/ContactListScreenRedux";
import { createStaticNavigation } from "@react-navigation/native";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";

const ReduxNavStack = () => {
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

  const stackNav = createStaticNavigation(Navig);
  return stackNav;
};

export default ReduxNavStack;
