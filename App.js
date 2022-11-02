import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

NativeWindStyleSheet.setOutput({
  default: "native",
});


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} 
              options={{presentation: 'modal', headerShown: false}}/>
            <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen}
              options={{ presentation: 'fullScreenModal', headerShown: false}}/>
            <Stack.Screen name="Delivery" component={DeliveryScreen}
              options={{ presentation: 'fullScreenModal', headerShown: false}}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}

