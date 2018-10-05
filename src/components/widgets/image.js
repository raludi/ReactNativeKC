import React from 'react';
import { Image } from 'react-native';

export default class ImageCharacter extends React.Component {
 
    static defaultProps = {
        styles: {},
        url: '',
        extension: '',
    }
 
    render() {
        const { url, extension, styles } = this.props;
        const URI = url + '/portrait_xlarge.' + extension;
        return (
            <Image
                style={ styles }
                source={{ uri: URI }}
                resizeMode={'cover'}
            /> 
        )
    }
}