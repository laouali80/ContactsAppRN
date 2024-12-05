import {
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { addContact } from "../redux2024/reducers_or_slices/contactsSlice";

// const AddContactForm = ({ onSubmit }) => {

// for redux
const AddContactForm = (props) => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    name: "",
    phone: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleUpdName = (name) => {
    // setState({name}) // overwrite the entire name property
    setState((prevState) => ({ ...prevState, name })); // Merge updates
  };

  const handleUpdPhone = (phone) => {
    // setState({phone}) // overwrite the entire phone property
    setState((prevState) => ({ ...prevState, phone })); // Merge updates
  };

  useEffect(() => {
    validateForm();
  }, [state]); // Run validation whenever state changes

  // validation
  const validateForm = () => {
    const names = state.name.split(" ");
    if (
      +state.phone >= 0 &&
      state.phone.length === 10 &&
      names.length >= 2 &&
      names[0] &&
      names[1]
      // state.name.length >= 3
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = () => {
    // onSubmit({name:state.name, phone:state.phone})
    // onSubmit({...state})
    // onSubmit(state);

    props.addContact(state);
    navigation.navigate("ContactList");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={state.name}
        onChangeText={handleUpdName}
      />
      <TextInput
        placeholder="phone"
        value={state.phone}
        style={styles.input}
        onChangeText={handleUpdPhone}
        keyboardType="numeric"
      />
      <Button
        title="Add"
        style={styles.button}
        onPress={handleSubmit}
        disabled={!isFormValid}
      />
    </KeyboardAvoidingView>
  );
};

AddContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    minWidth: 100,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    // width: "50%",
  },
  buttton: {
    margin: 50,
  },
});

export default connect(null, { addContact: addContact })(AddContactForm);
