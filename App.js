import React, { Component,useEffect,useState } from 'react';
import Swiper from 'react-native-deck-swiper';
import {ScrollView,TouchableOpacity, Button, StyleSheet, Text, View,Image } from 'react-native';
import { SwipeablePanel } from 'rn-swipeable-panel';
import { Audio } from 'expo-av';
import GestureRecognizer from 'react-native-swipe-gestures';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import favoriteList from './screens/favoriteList';
import searchMusic from './screens/searchMusic';
import artistProfile from './screens/artistProfile';
import artistMusicList from './screens/artistMusicList';
import Global from './Global';
import {  
  combineReducers,
  createStore,
} from 'redux';

// export const deleteName = () => ({  
//   type: 'DELETE_NAME',
//   name: ''
// });

// export const setName = name => ({  
//   type: 'ADD_NAME',
//   name: name,
// });

// INITIAL_STATE = {
//   name: 'Nanasi'
// }


const navigator = createStackNavigator({
    Page1: { screen: searchMusic, navigationOptions: () => ({ header: ()=> false})},
    Page2: { screen: favoriteList, navigationOptions: () => ({ header: ()=>  false})},
    Page3: { screen: artistProfile, navigationOptions: () => ({ header: ()=>  false})},
    Page4: { screen: artistMusicList, navigationOptions: () => ({ header: ()=>  false})},
  },
  {
      initialRouteParams: 'Page1'
  });
const AppContainer = createAppContainer(navigator);
export default class Exemple extends Component {
  render () {
    return (
      <>
        <AppContainer/>
      </>
    )
  }
}

const styles = StyleSheet.create({
});

