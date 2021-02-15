import "react-native-gesture-handler";
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SeenScreen, ToSeeScreen } from './src/screens'
import {Button} from 'react-native'

const Drawer = createDrawerNavigator();

export default function App(){


  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Seen">
        <Drawer.Screen name="Seen" component={SeenScreen} options={{title:"AnimeSeen"}}/>
        <Drawer.Screen name="ToSee" component={ToSeeScreen} options={{title:"AnimeToSee"}}/>

        
      </Drawer.Navigator>
    </NavigationContainer>
  );

}