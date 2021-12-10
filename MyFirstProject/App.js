import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsScreen from './src/navigation/DetailsScreen';
import ListadoScreen from './src/navigation/ListadoScreen';
import InfoScreen  from "./src/containers/InfoScreen";

    const ListadoStack = createNativeStackNavigator();

    function ListadoStackScreen() {
      return (
        <ListadoStack.Navigator>
        <ListadoStack.Screen name="Listado" component={ListadoScreen} />
        <ListadoStack.Screen name="Details" component={DetailsScreen} />

        
      </ListadoStack.Navigator>
      
    );
  }
  const InfoStack = createNativeStackNavigator();
  
  function InfoStackScreen() {
    return (
      <InfoStack.Navigator>
        <InfoStack.Screen name="Info" component={InfoScreen} />
      </InfoStack.Navigator>
    );
  }
  const Tab = createBottomTabNavigator();
  
  export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Historia') {
                  iconName = focused
                    ? 'md-book'
                    : 'md-book-outline';
                } else if (route.name === 'Infos') {
                  iconName = focused ? 
                  'md-code-sharp' : 'md-code-slash';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'grey',
          }
          )}
        >
          
        <Tab.Screen options={{ headerShown: false }} name="Historia" component={ListadoStackScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Infos" component={InfoStackScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}
