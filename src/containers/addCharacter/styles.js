
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: { 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(255, 77, 77)',
    },
    text: {
        color: '#2c3e50',
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#2c3e50',
        width: 200,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20 ,
    }
})