import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    contentStyle: {
      paddingHorizontal: 10,
      paddingTop: 10,
      backgroundColor: "#f4f4f4",
    },
  }}>
    <Stack.Screen name="index" options={{ title: "Home" }} />
  </Stack>;
}


export default RootLayout;