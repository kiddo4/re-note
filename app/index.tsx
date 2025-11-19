import PostItImage from "@/assets/images/post-it.png";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#666",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    backgroundColor: "#f4511e",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={ PostItImage }
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to ReNote</Text>
      <Text style={styles.subtitle}>Capture your every moment with ReNote</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/notes")}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
