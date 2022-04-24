import React from 'react'
import 'react-native-gesture-handler';
import HomePage from "./components/Home/HomePage"
import ArticleDetailsPage from "./components/Store/ArticleDetailsPage";
import RoomSelectPage from "./components/Store/RoomSelectPage"
import ReviewPage from './components/Review/ReviewPage';
import ProfilPage from './components/Profil/profilpage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Root(){
  return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Hotels"
          component={HomePage}
        >
        </Stack.Screen>

        <Stack.Screen
          name="Hotel Details"
          component={ArticleDetailsPage}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Choose Rooms'
          component={RoomSelectPage}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Overview'
          component={ReviewPage}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Your personal info'
          component={ProfilPage}
        >
        </Stack.Screen>

    </Stack.Navigator>
  )
}


export default class App extends React.Component{

  render(){
    return(
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Main" component={Root} options={{ headerShown: false }}></Drawer.Screen>

          </Drawer.Navigator>
        </NavigationContainer>
      
    )
  }
}
