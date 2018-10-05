import React from 'react';
import { View, FlatList, ActivityIndicator, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import  CharacterCell from '../../components/cells';
import  { connect } from 'react-redux';
import { actions as CharactersAction, getCharacters } from '../../redux/modules/characters';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export class CharacterList extends React.Component {

    state = {
        animatedItem: new Animated.Value(0)
    }
    onPressedCell = (value) => {
        Actions.characterDetail({ character: value})
    }

    _renderItem({ item }) {
        return (         
            <CharacterCell
                    character={item}
                    onPressedCell= {(value) => this.onPressedCell(value)}
            />
        )
    }

    componentDidMount() {
        this.props.fetchListCharacters();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.characters.list}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.id }
                    numColumns={2}
                    style={{paddingTop: 40}}
                />
                { 
                this.props.isFetching &&
                    <View style={{alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
                        <ActivityIndicator size={'large'} color={'black'} animating={true} />
                    </View>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: getCharacters(state),
        isFetching: state.characters.isFetching,
    }
} 

export default connect(mapStateToProps, 
    {
        fetchListCharacters: CharactersAction.fetchCharactersList,
    }
)(CharacterList)