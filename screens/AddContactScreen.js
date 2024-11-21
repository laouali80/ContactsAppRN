import React from "react";
import AddContactForm from "../components/AddContactForm";

const AddContactScreen = ({ route }) => {
  // /* 2. Get the param */ , addContact, contacts, loading
  const { handleSubmit } = route.params;

  return <AddContactForm onSubmit={handleSubmit} />;
};

export default AddContactScreen;
