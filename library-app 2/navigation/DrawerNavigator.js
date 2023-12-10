import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Search from '../screens/SearchScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={TabNavigator}/>
          <Drawer.Screen name='Search' component={Search}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;