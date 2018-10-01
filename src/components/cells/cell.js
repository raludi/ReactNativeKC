import React, { Component } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'

export default class CharacterCell extends Component {

    static defaultProps = {
        character: null
    }

    render() {
        const { path, extension } = this.props.character.thumbnail
        const imageURL = path + '/portrait_medium.' + extension; 
        return (
            <TouchableOpacity 
                style={styles.cellContainer}
            >
                <Image
                    source={{uri: imageURL}}
                    style={{ width: '100%', height: '100%'}}
                    resizeMode={'cover'}
                />
            </TouchableOpacity>
        )
    }
}