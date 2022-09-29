import { Button, Dimensions, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableHighlightBase, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';

import Card from '../Components/Card';
import Colors from '../constants/Colors';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';

const { height, width} = Dimensions.get('window');

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,        
    },
    containerScroll: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: Colors.text,
        textAlign: 'center',
        paddingVertical: 20,
        fontFamily: 'Play-Reg',
    },
    label: {
        fontSize: 14,
        color: Colors.text,
        textAlign: 'center',
        paddingVertical: 5,
        fontFamily: 'Play-Reg',
    },
    inputContainer: {
        maxWidth: width,
        height: 200, 
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '100%',
        borderBottonColor: Colors.primary,
        borderBottonWidth: 1,
        maxWidth: 70,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
        fontFamily: 'Play-Reg',        
    },
    buttonContainer: {
        width: width / 1.5,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    summaryContainer: {
        width: '80%',
        height: 180,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 20,
    },
    summaryText: {
        fontSize: 18,
        fontFamily: 'Play-Reg',
    },
});
const StarGameScreen = (onStartGame) => {

    const [ number, setNumber] = useState('');
    const [ confirmed, setConfirmed] = useState(false);
    const [ selectedNumber, setSelectedNumber] = useState(0);
    const onHandleChange = (text)  => {
        setNumber(text.replace(/[^0-9]/g, ''));
    }
    const onReset = () => {
        setNumber('');
        setSelectedNumber(false);
        setConfirmed(false);
        Keyboard.dismiss()
    }
    
    const onConfirm = () => {
        const choseNumber = parseInt(number, 10);
        if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) return;
        setConfirmed(true);
        setSelectedNumber(choseNumber)
        setNumber('');
    }
    
    const onHandStartGame = () => {
        onStartGame(selectedNumber);
    }
    
    const confirmedOutPut = () => confirmed && (
        <Card style={styles.summaryContainer}>
            <Text style= {styles.summaryText}>Tu elección</Text>
            <NumberContainer>{ selectedNumber}</NumberContainer>
            <Button
                title='Iniciar'
                onPress={onHandStartGame}
                color={Colors.primary}
            />            
        </Card>
    )
  return (
    <KeyboardAvoidingView contentContainerStyle = { styles.containerScroll} style= { styles.containerScroll} behavior ={Platform.OS === 'android' ? 'padding' : 'position'} keyboardVerticalOffset = {30}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView style= { styles.containerScroll}>
            
            <View style={ styles.container}>
                <Text style={styles.title}>Inicia el Juego</Text>
                <Card style={styles.inputContainer}>
                    <Text style={ styles.label}>Selecciona tu número</Text>
                    <Input
                        style= { styles.input}
                        keyboardType= 'numeric'
                        maxLength={2}
                        blurlOnSubmit
                        autoCapitalize = 'none'
                        autoCorrect= {false}
                        onChanceText= {(text) => onHandleChange(text)}
                        value= {number}
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title='Reiniciar'
                            onPress={onReset}
                            color= {Colors.primary}
                        />
                        <Button
                            title='Confirmar'
                            onPress={onConfirm}
                            color={Colors.secondary}
                        />
                    </View>
                </Card>
                {confirmedOutPut}
            </View>
        </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default StarGameScreen;