import { View, Text, StyleSheet, Pressable } from "react-native";
function Button({ children, onPress }) {
  return (
    <Pressable style={styles.pressed} onPress={onPress}>
      <View style={styles.root}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
}
export default Button;
const styles = StyleSheet.create({
  root: {
    height: 50,
    borderRadius: 30,
    backgroundColor: "#4B143E",
    marginTop: 13.77,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "500",
  },
  pressed: {},
});
