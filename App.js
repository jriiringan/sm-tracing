import React, { useEffect, useReducer, useRef, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { WebView } from 'react-native-webview';

const INITIAL_STATE = {
  rosario: 'https://tracetogether.smsupermalls.com/5f6880356b2d3'

};

function reducer(state, action) {
  switch (action.type) {
    case 'get':
      return {value: state[action.key]};
    default:
      return {...INITIAL_STATE};
  }
}
// document.getElementsByClassName('health-form-link').onclick = function(){
//   document.getElementById("symptoms").checked = false;
//   document.getElementById("ct_q1").checked = false;
//   document.getElementById("ct_q2").checked = false;
//   document.getElementById("ct_q3").checked = false;
//   document.getElementById("ct_q4").checked = false;
// }

const App = () => {
  const webviewRef = useRef(null)
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)


  const injectJavascript = `
    setTimeout(()=> {
      document.getElementById("terms").checked = true;
    }, 1500);
  `;

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView 
        ref={webviewRef}
        startInLoadingState={true}
        javaScriptEnabled={true}
        onMessage={(event) => {}}
        source={{ uri: state.rosario }}
        injectedJavaScript={injectJavascript}
       />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
