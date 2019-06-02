import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import Circle from '../components/Circle'
import Cross from '../components/Cross'
import {
  CENTER_POINTS, AREAS, CONDITIONS, GAME_RESULT_NO,
  GAME_RESULT_USER, GAME_RESULT_AI, GAME_RESULT_TIE
} from '../gameConstants'

import styles from './styles/gameBoard'
import PromptArea from '../PromptArea'

class GameBoardScreen extends React.Component {

    static navigationOptions = {
        title: 'GameBoard',
    };

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
}

export default GameBoardScreen;
