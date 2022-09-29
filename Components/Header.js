import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import React from "react";

const styles= StyleSheet.create({
    header: {
        height: 100,
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    title: {
        fontSize: 20,
        color: Colors.white,
        fontFamily: 'bold'
    }
});
const Header = ({ title}) =>{
    return (
        <View style= { styles.header}>
            <Text style={ styles.title}>{title}</Text>
        </View>

    )
}
export default Header;