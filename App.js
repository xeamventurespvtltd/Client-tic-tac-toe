import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RouterComponent from './Router';
import reducers from './src/reducer';

  class App extends Component {

  render() {
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    if(TextInput.defaultProps == null ) TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false; 
      return (
          <Provider store={createStore(reducers)}>
              <RouterComponent />        
          </Provider>
      )}
  }

  

  export default App;