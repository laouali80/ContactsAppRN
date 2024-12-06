import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import { login } from "../components/api";
import { connect } from "react-redux";
import { logInUser } from "../redux2024/reducers_or_slices/userSlice";

const LoginScreen = (props) => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    username: "",
    password: "",
  });
  // const [err, setErr] = useState("");

  const handleUpdUsename = (username) => {
    setState((prevState) => ({ ...prevState, username }));
    // setState({...state,username})
  };
  const handleUpdPassword = (password) => {
    setState((prevState) => ({ ...prevState, password }));
    // setState({ ...state, username });
  };

  useEffect(() => {
    // Equivalent to componentWillReceiveProps
    if (props.token) {
      navigation.navigate("Main");
    }
  }, [props.token, navigation]); // Dependency array

  const loginValidation = async () => {
    props.logInUser(state);

    // const users = {
    //   username: "password",
    // };
    // if (!state.username || !state.password) {
    //   setErr("Missing username or Password");
    // } else if (!users[state.username]) {
    //   // console.log("i am");
    //   setErr("User does not exist");
    // } else if (users[state.username] !== state.password) {
    //   setErr("Incorrect password");
    // } else {
    //   navigation.navigate("Main");
    //   return;
    // }
    // console.log("here", err);
    // we can explicitly navigate to any screen of Main
    // navigation.navigate('AddContact')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.error}>{props.err}</Text>
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
  error: {
    textAlign: "center",
    color: "red",
    margin: 5,
  },
});

const mapStateToProps = (state) => ({
  err: state.user.loginErr,
  token: state.user.token,
});

export default connect(mapStateToProps, { logInUser })(LoginScreen);

// export default LoginScreen;
