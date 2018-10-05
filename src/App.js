/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity, Text } from 'react-native';
import { CharacterList, CharacterDetail, CharacterForm } from './containers';
import store from './redux/store';
import { Provider } from 'react-redux';

const midnightBlue = '#2c3e50';
const sceneDefaultStyles = {
    navigationBarStyle: { backgroundColor: 'rgb(255, 77, 77)'},
    backButtonTintColor: midnightBlue,
    backButtonTextStyle: { color: midnightBlue },
    titleStyle: { color: midnightBlue },
}

const RightButton = props => (
    <TouchableOpacity style={{padding: 10}} onPress={ () => Actions.addCharacter() }>
        <Text style={{color: midnightBlue, fontWeight: 'bold'}}>{'Add'}</Text>
    </TouchableOpacity>
)

const RightButtonAddChar = props => (
    <TouchableOpacity style={{padding: 10}} onPress={ () => console.log('Characeter Added') }>
        <Text style={{color: midnightBlue, fontWeight: 'bold', fontSize: 14}}>{'SAVE'}</Text>
    </TouchableOpacity>
)

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <Stack key='root'>
                    <Scene 
                        key='characters' 
                        component={CharacterList} 
                        hideNavBar={true} 
                        initial={true}
                    /> 
                    <Scene 
                        key='characterDetail' 
                        component={CharacterDetail} 
                        renderRightButton={RightButton}
                        {...sceneDefaultStyles}
                    />  
                    <Scene 
                        key='addCharacter'
                        component={CharacterForm} 
                        title='ADD CHARACTER'
                        renderRightButton={RightButtonAddChar}
                        {...sceneDefaultStyles}
                    /> 
                </Stack>
            </Router>
        </Provider>
    );
  }
}

