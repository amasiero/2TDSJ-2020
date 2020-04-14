import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 4,
        marginHorizontal: 12,
        marginVertical: 24,
        backgroundColor: '#323c47',
        borderRadius: 16
    },
    first : {
        marginLeft: 4
    },
    icon : {
        height: 64,
        width: 64,
        marginHorizontal: 4 
    }
    
});

export default styles;