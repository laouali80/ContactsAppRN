import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";

const styles = StyleSheet.create({
  row: { padding: 20 },
});

const Row = (props) => {
  // console.log("hereee", props);
  return (
    <Pressable style={styles.row} onPress={() => onSelectContact(props)}>
      <Text style={{ color: "black" }}>{props.name}</Text>
      <Text>{props.phone}</Text>
    </Pressable>
  );
};

// Row.propTypes = {
//   name: PropTypes.string,
//   phone: PropTypes.string,
// };

export default Row;
