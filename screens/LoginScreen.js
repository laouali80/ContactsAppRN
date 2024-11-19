import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleUpdUsename = (username) => {
    setState({ username });
    // setState({...state,username})
  };
  const handleUpdPassword = (password) => {
    setState({ password });
    // setState({ ...state, username });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.error}>error</Text>
      <TextInput
        placeholder="username"
        autoCapitalize="none"
        value={state.username}
        onChangeText={handleUpdUsename}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        value={state.password}
        onChangeText={handleUpdPassword}
        secureTextEntry={true}
      />
      <Button
        title="Login"
        style={styles.button}
        onPress={() => console.log(1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
});

// export default LoginScreen;
