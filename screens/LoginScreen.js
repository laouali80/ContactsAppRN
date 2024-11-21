import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleUpdUsename = (username) => {
    setState({ username });
    // setState({...state,username})
  };
  const handleUpdPassword = (password) => {
    setState({ password });
    // setState({ ...state, username });
  };

  const loginValidation = () => {
    navigation.navigate("Main");

    // we can explicitly navigate to any screen of Main
    // navigation.navigate('AddContact')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.error}>error</Text>
      <TextInput
        placeholder="username"
        autoCapitalize="none"
        style={styles.input}
        value={state.username}
        onChangeText={handleUpdUsename}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        style={styles.input}
        value={state.password}
        onChangeText={handleUpdPassword}
        secureTextEntry={true}
      />
      <Button title="Login" style={styles.button} onPress={loginValidation} />
    </View>
  );
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
  text: {
    textAlign: "center",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
});

export default LoginScreen;
