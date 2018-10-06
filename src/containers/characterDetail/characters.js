import React from 'react';
import { View, Text } from 'react-native';
import  ImageCharacter  from '../../components/picture';
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
                    styles={styles.imageDetail}
                />
                <Text style={styles.text}>
                    Name: {character.name} {"\n"}
                    {   character.description.length > 0 &&
                        <Text>Description: {character.description} {"\n"} </Text>
                    }           
                    Number of comics: {character.comics.available} {"\n"}
                    Number of series: {character.series.available} {"\n"}
                    Number of events: {character.events.available} {"\n"}
                    Number of stories: {character.stories.available}                    
                </Text>
                
            </View>
        )
    }
}