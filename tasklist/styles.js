import { StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 16
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '90%',
      padding: 12,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 20,
      backgroundColor: '#fff',
    },
    button:{
        backgroundColor: '#77a863', 
        borderRadius:8,
        padding:10,
    },
    textButton:{
        color: '#fff',
    }
  });

  export default globalStyles;