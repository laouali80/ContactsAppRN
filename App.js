import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { fetchUsers } from "./components/api";
import { useEffect, useState } from "react";
import SectionListContacts from "./components/SectionListContacts";
import AddContactForm from "./components/AddContactForm";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [showForm, setShowForm] = useState(false);

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
    setShowForm(false);
  };

  const toggleShowForm = () => {
    setShowForm(true);
  };
  // console.log("herer", userContacts);
  return (
    <>
      {showForm ? (
        // <Text>test</Text>
        <AddContactForm onSubmit={addContact} />
      ) : loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View>
          <Button title="Add contact" onPress={toggleShowForm} />
          <SectionListContacts contacts={contacts} />
        </View>
      )}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
