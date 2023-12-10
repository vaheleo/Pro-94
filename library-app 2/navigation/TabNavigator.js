import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/HomeScreen'
import Search from '../screens/SearchScreen'

const Tab = createTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigation
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
                ? 'book'
                : 'book-outline'
          } else if (route.name === 'Search') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
>
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Search' component={Search}/>
        </Tab.Navigation>
    );
};

export default BottomTabNavigator;

