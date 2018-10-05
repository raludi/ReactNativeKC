import React from 'react';
import { View, Text } from 'react-native';
import ImageCharacter from '../../components/widgets/image';
import styles from './styles'

export default class CharacterDetail extends React.Component {


    render() {
        const {character}  = this.props;
        const { path, extension } = character.thumbnail
        return (
            <View style={styles.container}>
                <ImageCharacter
                    url={path}
                    extension={extension}
                    styles={{ width: '100%', height: 300}}
                />
                <Text style={styles.text}>
                    Name: {character.name} {"\n"}
                    {   character.description.length > 0 &&
                        <Text>Description: {character.description} {"\n"} </Text>
                    }   
                </Text>
            </View>
        )
    }
}