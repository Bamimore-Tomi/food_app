import React from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native';
import BasicFlatList from './components/basicFlatList'
import ColorScreen from "./components/counterScreen"
import BoxScreen from "./components/BoxScreen"
//redux 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducer';


export default function App(){
  return (
    <BoxScreen/>
 
  
    

  )
}
