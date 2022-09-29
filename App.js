import { ActivityIndicator, SafeAreaView, StyleSheet, View } from "react-native";
import React, {useState} from "react";

import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StarGameScreen';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffff',
  },
  containerLoader:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#ffff',
  }
});
export default function App() {
  const [ userNumber, setUserNumber] = useState(0);
  const [ rounds, setRounds] = useState(0);
  const [ loaded] = useFonts ({
    'Play-Black' : require('./assets/fonts/PlayfairDisplay-Black.ttf'),
    'Play-Bold' : require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
    'Play-Reg' : require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
  });
const title = !userNumber ? 'Adivina el Número' : 'Comienza el Juego';

const onStartGame = (selectNumber) => {
  setUserNumber(selectNumber);
}
const onGameOver = (roundsNumber) => {
  setRounds(roundsNumber);
}
const onRestartGame = () => {
  setUserNumber(0);
  setRounds(0);
}
if (!loaded) {
  return (
    <View style= { styles.containerLoader}>
      <ActivityIndicator size= 'large' color= {Colors.primary} />
    </View>
  )
}
  let content = <StartGameScreen onStartGame={onStartGame} />

  if ( userNumber && rounds <=0) {
    content = <GameScreen selectNumber={userNumber} onGameOver={onGameOver} />
  } else if(rounds > 0) {
    content = <GameOverScreen roundsNumber={rounds} userNumber={userNumber} onRestart={onRestartGame} />
  }
  return(
    <SafeAreaView style={ styles.container}>
      <Header title={rounds > 0 ? 'Game Over' : title } />
      {content}
    </SafeAreaView>

  );
}