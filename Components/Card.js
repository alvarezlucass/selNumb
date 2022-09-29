import { StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors';
import React from 'react';

const styles= StyleSheet.create({
    container:{
        shadowColor: Colors.black,
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: Colors.white,
        borderRadius: 5,
    }
})
const Card = ({ children, style}) => {
  return (
    <View style= {{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default Card;