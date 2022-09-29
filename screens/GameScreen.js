import { Alert, Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import NumberContainer from '../components/NumberContainer';
import { generateRAndomNumberBetween } from '../utils/generateRAndomNumberBetween';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        marginTop: 20,
        marginHorizontal: 20,
        width: width * 0.8,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
    
});

const GameScreen =({selectedNumber, onGameOver}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRAndomNumberBetween(1, 100, selectedNumber));
    const [ rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    
    const onHandNextGuess= (direction)=>{
        if(
            (direction === 'lower' && currentGuess < selectedNumber) ||
            (direction === 'greater' && currentGuess > selectedNumber)
        ){
            Alert.alert ('Ups, me parece que está MAL...', [{text: 'Perdón!', style: 'Cancel'}]);
            return
        }        
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current =currentGuess;
        }
        const nexNumber = generateRAndomNumberBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nexNumber);
        setRounds(currentRounds => currentRounds +1);
    };
    useEffect(() => {
        if(currentGuess === selectedNumber) {
            onGameOver(rounds);
        }
        }, [currentGuess, selectedNumber, onGameOver]);
    
  return (
    <View style={ styles.container}>
        <Card style={styles.card}>
            <Text style={ styles.title}>Que número saldra?</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContainer}>
                <Button 
                    title='Bajar'
                    onPress={()=> onHandNextGuess('lower')}
                    color= {Colors.primary}
                />
                <Button 
                    title='Subir'
                    onPress={()=> onHandNextGuess('greater')}
                    color= {Colors.secondary}
                />
            </View>
        </Card>
    </View>
  );
}
export default GameScreen;