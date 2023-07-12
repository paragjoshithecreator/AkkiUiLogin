import { View, Text, StyleSheet } from "react-native";
function LoginWith({ children }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
export default LoginWith;
const styles = StyleSheet.create({
  root: {
    borderRadius: 30,
    borderColor: "#BBBFC3",
    borderWidth: 1,
    padding: 16,
    alignItems: "center",
    marginBottom: 11,
  },
  text: {
    fontSize: 14,
    color: "#31363A",
    fontWeight: "bold",
  },
});
