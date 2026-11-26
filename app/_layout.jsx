import 'react-native-gesture-handler'; import React from 'react'; import {Stack} from 'expo-router'; import {GestureHandlerRootView} from 'react-native-gesture-handler'; import {Provider} from '../store';
export default function Root(){return <GestureHandlerRootView style={{flex:1}}><Provider><Stack screenOptions={{headerShown:false}}/></Provider></GestureHandlerRootView>}
