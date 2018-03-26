import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, header } = styles;
  return (
    <View style={header}>
      <Text style={textStyle}>Ramalan Cuaca</Text>
    </View>
  );
};
const styles = {
    header: {
      backgroundColor: '#F44336',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 10,
      position: 'relative',

    },
    textStyle: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Header;
