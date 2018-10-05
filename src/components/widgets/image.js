import React from 'react';
import { Image, Animated } from 'react-native';

const animatedItem = new Animated.Value(0)

export default class ImageCharacter extends React.Component {

    static defaultProps = {
        styles: {},
        url: '',
        extension: '',
    }
 
    componentDidMount() {
        Animated.timing(animatedItem, {
            toValue: 1,
            duration: 2000
        }).start()
    }

    render() {
        const { url, extension, styles } = this.props;
        const URI = url + '/portrait_xlarge.' + extension;
        return (
            <Animated.Image
                style={ {...styles, opacity: animatedItem} }
                source={{ uri: URI }}
                resizeMode={'cover'}
            /> 
        )
    }
}