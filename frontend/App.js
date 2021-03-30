// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font';
import {COLORS} from './screens/constants.js'

import Home from './screens/home'
import Tests from './screens/profile'
import Details from './screens/details'
import Result from './screens/result'

const Stack = createStackNavigator();
const Tabs = AnimatedTabBarNavigator();

function homeStackScreen(){
  return(
    <Stack.Navigator screenOptions={{headerShown: false, header: null}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Tests" component={Tests} />
        <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  )
}

export default function App() {
  const [loaded] = useFonts({
    Visby: require('./assets/fonts/VisbyRoundCF-Light.ttf'),
    VisbyRegular: require('./assets/fonts/VisbyRoundCF-Regular.ttf'),
    VisbyRB: require('./assets/fonts/VisbyRoundCF-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tabs.Navigator
        // default configuration from React Navigation
        tabBarOptions={{
          activeTintColor: COLORS.salmon,
          inactiveTintColor: "#fff",
          activeBackgroundColor: "#fff",
          
          
        }}

        appearence={{
          floating: true,
          tabBarBackground: COLORS.lightSalmon,
          whenInactiveShow: 'icon-only',
          whenActiveShow: 'label-only',
        }}
      >
        <Tabs.Screen
          name="Home"
          component={homeStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Feather
                    name="home"
                    size={size ? size : 24}
                    color={focused ? color : "#222222"}
                    focused={focused}
                    color={color}
                />
            )
          }}
        />
          <Tabs.Screen 
          name="Tests" 
          component={Details} 
          options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Feather
                    name="user"
                    size={size ? size : 24}
                    color={focused ? color : "#222222"}
                    focused={focused}
                    color={color}
                />
            )
          }}
          />

      </Tabs.Navigator>
    </NavigationContainer>
  );
}