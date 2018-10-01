import React from 'react';
import { View, Text, FlatList } from 'react-native'
import * as api from '../../api/';
import styles from './styles'
import  CharacterCell from '../../components/cells'

export default class CharacterList extends React.Component {

    state = {
        characters: []
    } 

    _renderItem({ item }) {
        return (         
            <CharacterCell
                    character={item}
            />
        )
    }

    componentWillMount() {
        api.fetchCharacters().then((result) => {
            console.log('Working promise')
            console.log(result)
            this.setState({characters: result})
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.characters}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.id }
                    numColumns={2}
                    style={{paddingTop: 40}}
                />
            </View>
        )
    }
}