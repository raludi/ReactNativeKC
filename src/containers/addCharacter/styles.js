
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'rgb(255, 77, 77)',
    },
    text: {
        margin: 10,
        color: '#2c3e50',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        margin: 10,
        width: '90%',
        backgroundColor: '#2c3e50',
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20 ,
    },
    imageContainer: {
        borderWidth: 1, 
        borderColor: '#2c3e50',
        borderRadius: 20,
        height: 200,
        width: '100%'
    },
    image: {
        borderRadius: 20,
        width: '100%',
        height: '100%'
    },
    imageText: { 
        color: 'white', 
        fontWeight: 'bold',
        position: 'absolute',
        top: '46%',
        textAlign: 'center',
        left: 0,
        right: 0,
    }
})