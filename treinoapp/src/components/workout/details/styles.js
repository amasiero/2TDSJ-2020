import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container : {
       flexDirection: 'column',
       width: '60%',
       paddingHorizontal: 8
   },
   title: {
       color: '#feffff',
       fontSize: 24,
       fontWeight: 'bold',
       textTransform: 'uppercase',
       marginBottom: 16
   },
   infos : {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
   },
   info : {
       color :  '#feffff'
   },
   containerDays : {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginVertical: 8
   },
   day : {
       backgroundColor: '#262f38',
       color: '#feffff',
       borderRadius: 20,
       paddingVertical: 8,
       paddingHorizontal: 24,
       borderColor: '#feffff',
       borderWidth: 1,
       textTransform: 'uppercase'
   },
   active : {
       backgroundColor: '#fd3c29',
       borderColor: '#fd3c29'
   }
});

export default styles;