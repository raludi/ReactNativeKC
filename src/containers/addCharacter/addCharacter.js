

import React from 'react';
import { View, TextInput , Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker'

export default class CharacterForm extends React.Component{
 
    
    constructor(props) {
        super(props)

       this.state = {
                name: '',
                films: '',
                image: null,
        }

        this.options = {
            title: 'Select Image',
            maxWidth: 640,
            maxHeight: 640,
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
        };
    }
    
    _onImagePickerTapped() {
        ImagePicker.showImagePicker(this.options, (response) => {
            if (response.uri && response.data) {
              let preview = { uri: response.uri };
              let data = 'data:image/jpeg;base64,' + response.data 
              this.setState({
                image: { preview, data }
              });
            }
          });
    }

    _renderImageInput() {
        const imageUri = this.state.image ? this.state.image.preview : null
        const imageLabel = this.state.image ? 'Press to choose another image' : 'Press to choose an image'
        return (
            <View style={{marginTop: 20}}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => this._onImagePickerTapped()}>
                    <Image source={imageUri} style={styles.image} resizeMode={'cover'} />
                    <Text style={styles.imageText}>{imageLabel}</Text>
                </TouchableOpacity>
            </View>
        )
    }

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
            <View style={{ paddingHorizontal: 20, paddingBottom: 40}}>
                    { this._renderImageInput() }
            </View>
        </View>
    )
  }
}