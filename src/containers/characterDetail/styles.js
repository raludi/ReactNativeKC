
import { StyleSheet } from 'react-native'
import * as Colors from '../../commons/colors'
export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: Colors.predefined.main,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.predefined.secondary,
        padding: 10
    },
    imageDetail: {
        width: '100%', 
        height: 300
    }
})