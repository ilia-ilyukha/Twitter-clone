import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import SettingsScreen from './screens/SettingsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import SearchScreen from './screens/SearchScreen';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleStyle: false,
      headerShown: true
    }}>
      {/* <Stack.Screen name="Home1" component={HomeScreen} /> */}
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        screenOptions={{
          headerShown: false
        }} />
      <Stack.Screen name="New Tweet" component={NewTweet} />
      {/* <Stack.Screen name="Tweet Screen" component={TweetScreen} />
      <Stack.Screen name="Profile Screen" component={ProfileSreen} /> */}
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

