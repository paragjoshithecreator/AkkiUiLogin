import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
} from "react-native";
import Button from "../components/Button";
import LoginWith from "../components/LoginWith";
function LoginScreen({ navigation }) {
  const onPressTitle = () => {
    navigation.navigate("ForgetPassword");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerLogo}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require("../assets/logo/titleLogo.png")}
          />
        </View>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require("../assets/logo/titleTwologo.png")}
          />
        </View>
      </View>

      <View style={styles.userTextView}>
        <Text style={styles.userText}>Username</Text>
        <View style={styles.userInput}>
          <TextInput style={styles.inputTextt} placeholder="Username" />
        </View>
      </View>
      <View style={styles.userTextView}>
        <Text style={styles.userText}>Password</Text>
        <View style={styles.userInput}>
          <TextInput placeholder="********" />

          <View style={styles.password}>
            <Image
              style={styles.passwordImage}
              source={require("../assets/logo/password.png")}
            />
          </View>
        </View>
      </View>
      <Button onPress={() => navigation.navigate("Dash")}>Login</Button>
      <Text style={styles.forget} onPress={onPressTitle}>
        Forget username or password?
        <Text
          style={{ textDecorationLine: "underline" }}
          onPress={onPressTitle}
        >
          Click here.
        </Text>
      </Text>
      <LoginWith>LOGIN WITH FACEBOOK</LoginWith>
      <LoginWith>LOGIN WITH GOOGLE</LoginWith>
      <LoginWith>LOGIN WITH APPLE ID</LoginWith>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageOne}
          source={require("../assets/logo/ourimg.png")}
        />
      </View>
    </ScrollView>
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    marginHorizontal: "10%",
    marginTop: 10,
  },
  innerLogo: {
    flexDirection: "row",
    marginTop: 41.53,
    marginBottom: 50,
  },
  logoView: {
    marginLeft: 5,
  },
  logo: {
    height: 50,
    width: 200,
  },
  userTextView: {
    marginTop: 6.38,
  },
  userText: {
    fontSize: 20,
    fontWeight: "600",
  },
  userInput: {
    flexDirection: "row",
    height: 40,
    borderRadius: 15,
    borderColor: "#F2EEEC",
    borderWidth: 2,
    paddingLeft: 20,
    marginTop: 10,
    backgroundColor: "#F2EEEC",
    justifyContent: "space-between",
  },
  password: {
    justifyContent: "center",
  },
  passwordImage: {
    height: 50,
    width: 50,
  },
  forget: {
    paddingLeft: 20,
    marginTop: 14.77,
    fontSize: 16,
    color: "#31363A",
    marginBottom: 20,
  },
  imageContainer: {
    marginTop: 33.62,
    alignItems: "center",
  },
  imageOne: {
    width: 400,
    height: 400,
  },
  inputTextt: {
    height: 40,
  },
});
