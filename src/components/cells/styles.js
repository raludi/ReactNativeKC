import { StyleSheet, Dimensions } from 'react-native';
import * as Colors from '../../commons/colors';

export default StyleSheet.create({
    cellContainer: {
        width: '50%',
        height: 200,
        backgroundColor: Colors.predefined.main,
        paddingHorizontal: 1,
        paddingVertical: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
})