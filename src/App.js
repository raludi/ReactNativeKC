/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux'
import CharacterList from './containers/characters';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Stack key="root">
              <Scene 
                  key="characters" 
                  component={CharacterList} 
                  hideNavBar={true} 
                  initial={true}
              />  
          </Stack>
      </Router>
    );
  }
}

