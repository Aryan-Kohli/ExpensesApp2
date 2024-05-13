const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import WelcomeScreen from "./screens/WelcomeScreen";
import EventPage from "./screens/EventPage";
import Modal1 from "./screens/Modal1";
import Event1 from "./screens/Event1";
import Members from "./screens/Members";
import Transactions from "./screens/Transactions";
import AddTransactions from "./screens/AddTransactions";
import InfoScreen from "./screens/InfoScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventPage"
              component={EventPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Modal1"
              component={Modal1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Event1"
              component={Event1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Members"
              component={Members}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Transactions"
              component={Transactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddTransactions"
              component={AddTransactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
            name="InfoScreen"
            component={InfoScreen}
            options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
