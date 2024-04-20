import 'react-native-gesture-handler';


import React from 'react';
import {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View , StatusBar} from 'react-native';

import styled from 'styled-components/native';
import Header from './src/components/Header/index';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import InOutCome from './src/components/InOutComing';
import CurrentBalance from './src/components/CurrentBalance';
import TopList from './src/components/TopList';
import Transaction from './src/components/Transaction ';

const App = () => {
  return (
    <>
    
    <SafeAreaView style={styles.container}>
      <Header />
      <CurrentBalance/>
      <InOutCome/>
      <TopList/>
      <Transaction/>
    </SafeAreaView>

    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  icon: {
    height: 50,
    width: 50,
  },
});

export default App;

// import HomeS from './src/Screens/Home';
// import SettingsS from './src/Screens/Settings';
// import HistoryS from './src/Screens/History';
// import TopListS from './src/components/TopList';
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <NavigationContainer>

    
//       <Drawer.Screen name="Home" component={HomeS} />
//       <Drawer.Screen name="History" component={HistoryS} />
//       <Drawer.Screen name="TopList" component={TopListS} />
//       <Drawer.Screen name="Settings" component={SettingsS} />
   
//     </NavigationContainer>
//   );
// }

// // export default MyDrawer