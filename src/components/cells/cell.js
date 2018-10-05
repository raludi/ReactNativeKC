import React, { Component } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import styles from './styles'
import ImageCharacter from '../widgets/image'

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
                    styles={{ width: '100%', height: '100%'}}
                />
            </TouchableOpacity>
        )
    }
}