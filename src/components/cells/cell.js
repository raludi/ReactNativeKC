import React, { Component } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'
import ImageCharacter from '../picture'

export default class CharacterCell extends Component {

    static defaultProps = {
        character: null
    }
    
    render() {
        const { character } = this.props;
        const { path, extension } = character.thumbnail
        return (
            <TouchableOpacity 
                onPress={ () => this.props.onPressedCell(character) }
                style={styles.cellContainer}
            >
                <ImageCharacter
                    url={path}
                    extension={extension}
                    styles={styles.image}
                />
            </TouchableOpacity>
        )
    }
}