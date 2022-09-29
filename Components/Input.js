import { StyleSheet, TextInput } from 'react-native';

import Colors from '../constants/Colors';
import React from 'react';

const styles = StyleSheet.create({
    input: {
        borderBottonColor: Colors.primary,
        borderBottonWidth: 1,
        marginVertical: 20,
        ontFamily: 'Play-Reg',
    }
})
const Input = ({style, ...props}) => {
  return (
    <TextInput {...props} style={{...styles.input,...style}} />
  )
}

export default Input;