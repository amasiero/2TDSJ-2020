import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 4,
        marginHorizontal: 12,
        backgroundColor: '#262f38',
        borderBottomColor: '#323c47',
        borderBottomWidth:  2
    },
    icon : {
        color: '#feffff'
    },
    title: {
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#feffff'
    }
});

export default styles;