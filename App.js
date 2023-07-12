import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";
import ForgetPassword from "./screens/ForgetPassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoard from "./screens/DashBoard";
import RegistrationScreen from "./screens/RegistrationScreen";

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Dash" component={DashBoard} />
        <Tab.Screen name="Registration" component={RegistrationScreen} />
        <Tab.Screen name="Forget" component={ForgetPassword} />
      </Tab.Navigator>

      {/* <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            headerBackground: () => (
              <Image
                style={StyleSheet.absoluteFill}
                source={{
                  uri: "https://auditbots.com/gallery/04.33AMpassb-ghcc5fbb96088384e.jpg",
                }}
              />
            ),
            title: "Forget Password",
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
