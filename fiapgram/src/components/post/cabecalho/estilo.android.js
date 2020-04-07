import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16
    },
    imagem: {
        height: 48,
        width: 48,
        borderRadius: 50,
        marginRight: 8
    },
    nome: {
        fontFamily: 'Roboto',
        fontSize: 16
    },
});

export default estilos;