// import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  row: { padding: 20 },
});

const Row = ({ props }) => {
  // props: {name, phone}
  // console.log("hereee", props)
  //
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => props.onSelectContact(props)}
    >
      <Text style={{ color: "black" }}>{props.name}</Text>
      <Text>{props.phone}</Text>
    </TouchableOpacity>
  );
};

// Row.propTypes = {
//   name: PropTypes.string,
//   phone: PropTypes.string,
// };

export default Row;
