import {
    Dimensions,
    StyleSheet
} from 'react-native';

const width = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
    imagem: {
        height: width,
        width: width
    }
});

export default estilo;

