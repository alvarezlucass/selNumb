import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Card from '../Components/Card';
import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create ( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    resultContainer: {
        width: width * 0.8,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textResult: {
        fontSize: 16,
        color: Colors.text,
        textAlign: 'center',
        paddingVertical: 5,
        marginVertical: 10,
    },
    resultContainerLandscape: {
        flex: 1,
        width: width * 0.8,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
    const [ isPortRait, setIsPortRait ] = useState(true);
    
    const onPortRait = () => {
        const dim= Dimensions.get('screen');
        return dim.height >= dim.width;
    }
    const statePortRait = () => {
        setIsPortRait(onPortRait);
    }
    useEffect(() => {
        Dimensions.addEventListener('change', statePortRait())
        return () => {
            Dimensions.removeEventListener('change', statePortRait())
        }
    });
  return (
    <View style= {styles.container}>
        <Card style= {isPortRait ? styles.resultContainer : styles.resultContainerLandscape}>
        <Image source = {{uri: 'https://media.istockphoto.com/vectors/game-over-comic-speech-bubble-style-vector-illustrationjpg-vector-id1169155347?s=612x612' }} style={styles.image} />
        <View>
            <Text style= { styles.textResult}>Intentos: {roundsNumber}</Text>
            <Text style= {styles.textResult}>El número era: {userNumber}</Text>
            <Button 
                title='Reiniciar'
                onPress={onRestart}
                color= {Colors.primary}
            />
        </View>
        </Card>
    </View>
  )
}

export default GameOverScreen;