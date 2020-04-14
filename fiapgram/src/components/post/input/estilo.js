import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        paddingRight: 24
    },
    input: {
        flex: 1
    },
    publish: {
        paddingHorizontal: 8,
        color: '#5bc0de'
    }
});

export default estilo;