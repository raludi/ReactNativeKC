

import React from 'react';
import { View, TextInput , Text} from 'react-native';
import styles from './styles';

export default class CharacterForm extends React.Component{
 
  state = {
    name: '',
    films: '',
  }
//npm install --save react-native-image-picker -> para elegir fotos de librería
//Hay que enlazarlo, para ello nos vamos Xcode, libraries -> Add filest to "project" -> Project -> node_modules -> react-native-image-picker -> ios -> .xcodeproj
//Select root project (Xcode) -> Linked libraries -> + -> Select RNImagePicker.a
//Add to info.plist
/*<key>NSPhotoLibraryUsageDescription</key>
    <string>$(PRODUCT_NAME) would like access to your photo gallery</string>
    <key>NSCameraUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to use your camera</string>
    <key>NSPhotoLibraryAddUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to save photos to your photo gallery</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>$(PRODUCT_NAME) would like to your microphone (for videos)</string>*/
 

    //Para Android leer -> https://github.com/react-community/react-native-image-picker
  render() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Name</Text>
                <TextInput
                    style= {styles.input}
                    label= {'Character Name'}
                    value= {this.state.name}
                    onChangeText= { (name) => this.setState({name}) }
                    placeholder='Write here'
                    placeholderTextColor="white"
                />
            </View>
            <View>
                <Text style={styles.text}>Description</Text>
                <TextInput
                    style= {styles.input}
                    label= {'Number of films'}
                    value= {this.state.films}
                    onChangeText= { (films) => this.setState({films}) }
                    placeholder='Write here'
                    placeholderTextColor="white"
                />
            </View>
 
        </View>
    )
  }
}