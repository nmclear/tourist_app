import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
    container: {
      width: Layout.window.width,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      paddingTop: 10,
      paddingBottom: 5,
  
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
  
      borderColor: 'rgba(45, 52, 54, 0.1)',
      borderWidth: 2,
      borderTopWidth: 0,
  
      shadowColor: '#2d3436',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 0.6,
      shadowRadius: 2,
      elevation: 5,
      zIndex: 5,
    },
    buttonStyle: {
      width: 55,
      backgroundColor: '#fff',
      borderRadius: 5,
      borderColor: '#2d3436',
      borderWidth: 1,
    },
    btnTextStyle: {
      alignSelf: 'center',
      color: '#2d3436',
      fontSize: 12,
      fontWeight: '600',
    },
});

export default styles;