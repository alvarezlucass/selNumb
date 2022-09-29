import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import React from 'react';

const styles= StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius: 10, 
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 20,
        fontFamily: 'Play-Reg',
    },
});

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;