import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddContactScreen from "./screens/AddContactScreen";
import ContactListScreen from "./screens/ContactListScreen";
import { useEffect, useState } from "react";
import { fetchUsers } from "./components/api";
import SwitchNavigation from "./navigations/SwitchNavigation";
import StackNavigation from "./navigations/StackNavigation";
import ComposingNavigation from "./navigations/ComposingNavigation";
import TabNavigation from "./navigations/TabNavigation";
import ReduxNavStack from "./navigations/ReduxNavStack";
import { Provider } from "react-redux";
import store from "./redux2024/store";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userContacts = await fetchUsers();

        setContacts(userContacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false); // Stop loading once the fetch is complete
      }
    };
    getUsers();
  }, []);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // const SwitchNavigation = createNativeStackNavigator({
  //   initialRouteName: "ContactList",
  //   screens: {
  //     AddContact: {
  //       screen: AddContactScreen,

  //       initialParams: {
  //         handleSubmit: addContact,
  //       },
  //     },
  //     ContactList: {
  //       screen: ContactListScreen,
  //       options: {
  //         headerShown: false,
  //       },
  //       initialParams: {
  //         contacts: contacts,
  //         loading: loading,
  //       },
  //     },
  //   },
  // });

  // const AppNavigator = createStaticNavigation(SwitchNavigation);
  // const AppNavigator = SwitchNavigation(addContact, contacts, loading);
  // const AppNavigator = StackNavigation(addContact, contacts, loading);
  // const AppNavigator = ComposingNavigation(addContact, contacts, loading);
  // const AppNavigator = TabNavigation(addContact, contacts, loading);
  const AppNavigator = ReduxNavStack();

  return (
    // Provider the app reload when the store state changes
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
