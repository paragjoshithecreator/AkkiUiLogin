import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";

function ForgetPassword({ navigation }) {
  const onPressTitle = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.headingText}>Forgot Password?</Text>
      <Text style={styles.details}>
        Enter Your email and we'll send you instruction to reset your password
      </Text>
      <Text style={styles.instruction}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <Button>SEND RESET LINKS</Button>
      <View style={styles.back}>
        <Text onPress={onPressTitle}>
          Back to <Text style={{ textDecorationLine: "underline" }}>Login</Text>
        </Text>
      </View>
    </View>
  );
}
export default ForgetPassword;
const styles = StyleSheet.create({
  root: { marginTop: 30, marginHorizontal: "5%" },
  headingText: {
    fontSize: 22,
    fontWeight: "600",
  },
  details: {
    marginTop: 30,
    marginRight: 50,
    fontSize: 16,
  },
  instruction: {
    fontWeight: "500",
    marginTop: 20,
    fontSize: 20,
  },
  inputContainer: {
    height: 40,
    borderRadius: 15,
    borderColor: "#000",
    backgroundColor: "#F2EEEC",
    borderWidth: 1,
    marginTop: 10,
  },
  input: {
    height: 40,
    paddingLeft: 20,
  },
  back: {
    marginTop: 20,
    alignItems: "center",
  },
});
