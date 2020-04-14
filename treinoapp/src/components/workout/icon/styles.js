import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 2,
        marginHorizontal: 4,
        backgroundColor: '#262f38',
        borderRadius: 100/2,
        width: 100,
        height: 100
    },
    icon : {
        width: 150,
        height: 150,
        marginLeft: -16
    }
});

export default styles;