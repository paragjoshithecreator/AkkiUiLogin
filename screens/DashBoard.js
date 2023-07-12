import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Button from "../components/Button";

function DashBoard({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.headText}>SHARE MY LIFE</Text>
        <Image
          style={styles.image}
          source={require("../assets/logo/book.png")}
        />
        <Text style={styles.anotherText}>Create a Memory Book</Text>
        <Button>START BOOK</Button>
        <Image style={styles.arrow} source={require("../assets/arrow.png")} />
        <Text style={styles.textCrete}>Create Visual Presentation</Text>
        <Button>START PRESENTATION</Button>
        <Image
          style={styles.haImage}
          source={require("../assets/logo/hand.png")}
        />
        <Text style={styles.textL}>Share on Social Media</Text>
        <Button>SHARE NOW</Button>
      </View>
    </ScrollView>
  );
}
export default DashBoard;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 43.5,
    marginTop: 22,
    alignItems: "center",
    //backgroundColor: "#BCAB9F",
  },
  headText: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 26,
  },
  anotherText: {
    fontSize: 20,
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 20,
  },
  arrow: {
    height: 100,
    width: 100,
    marginTop: 44,
  },
  textCrete: {
    color: "#31363A",
    fontSize: 20,
    marginTop: 20,
  },
  haImage: {
    height: 100,
    width: 100,
    marginTop: 47,
    marginBottom: 20,
  },
  textL: {
    color: "#31363A",
    fontSize: 20,
    marginBottom: 13,
  },
});
