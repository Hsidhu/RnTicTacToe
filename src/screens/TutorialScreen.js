import React from "react";
import { View, ImageBackground, TouchableWithoutFeedback } from "react-native";
import Circle from '../components/Circle'
import Cross from '../components/Cross'
import {
  CENTER_POINTS, AREAS, CONDITIONS, GAME_RESULT_NO,
  GAME_RESULT_USER, GAME_RESULT_AI, GAME_RESULT_TIE,
  PLAYER_POINTS, PLAYER_ONE_AREA,
  PLAYER_ONE_OPTION_1, PLAYER_ONE_OPTION_2, PLAYER_ONE_OPTION_3,
  PLAYER_ONE_OPTION_4, PLAYER_ONE_OPTION_5, PLAYER_ONE_OPTION_6
} from '../gameConstants';
import _ from 'lodash';

import styles from '../styles/gameboard'
import PromptArea from '../PromptArea'

class TutorialScreen extends React.Component {
  static navigationOptions = {
    title: 'Tutorial',
  };

  constructor() {
    super();
    this.state= {
      AIInputs: [],
      userInputs: [],
      result: GAME_RESULT_NO,
      round: 0,
      currentPlayer: 'playerOne',
      currentSizeOption: '',
      selectedOption: 4,
      AIIOptions: [1,2,3,4,5,6],
      playerOneInput : []
    };

    this.setPlayer = this.setPlayer.bind(this);
  }


  restart() {
    const { round } = this.state;
    this.setState({
      userInputs: [],
      AIInputs: [],
      result: GAME_RESULT_NO,
      round: round + 1
    });
    setTimeout(() => {
      if (round % 2 === 0) {
        this.AIAction()
      }
    }, 5)
  }

  boardClickHandler(e: Object) {
    const { locationX, locationY } = e.nativeEvent;
    const { userInputs, AIInputs, result, playerOneInput } = this.state
    if (result !== -1) {
      return
    }
    const inputs = userInputs.concat(AIInputs);

    const area = AREAS.find(d =>
        (locationX >= d.startX && locationX <= d.endX) &&
        (locationY >= d.startY && locationY <= d.endY));

    if (area && inputs.every(d => d !== area.id)) {

      this.setState({ userInputs: userInputs.concat({position : area.id, size: this.state.currentSizeOption}) });
      this.setState({ playerOneInput: playerOneInput.concat(this.state.selectedOption)});

      setTimeout(() => {
        this.judgeWinner()
        this.AIAction()
      }, 5)
    }
  }

  AIAction() {
    const { userInputs, AIInputs, result } = this.state;
    if (result !== -1) {
      return
    }
    while(true) {
      const inputs = userInputs.concat(AIInputs)

      const randomNumber = Math.round(Math.random() * 8.3)
      if (inputs.every(sector => sector.position !== randomNumber)) {
        this.setState({ AIInputs: AIInputs.concat({position: randomNumber, size: 'big'})});
        this.judgeWinner();
        break
      }
    }
  }

  componentDidMount() {
    this.restart()
  }

  isWinner(inputs: number[]) {
    return CONDITIONS.some(d => d.every(item => inputs.indexOf(item) !== -1))
  }

  judgeWinner() {
    const { userInputs, AIInputs, result } = this.state
    const inputs = userInputs.concat(AIInputs)

    if (inputs.length >= 5 ) {
      let res = this.isWinner(userInputs)
      if (res && result !== GAME_RESULT_USER) {
        return this.setState({ result: GAME_RESULT_USER })
      }
      res = this.isWinner(AIInputs)
      if (res && result !== GAME_RESULT_AI) {
        return this.setState({ result: GAME_RESULT_AI })
      }
    }

    if (inputs.length === 9 &&
        result === GAME_RESULT_NO && result !== GAME_RESULT_TIE) {
      this.setState({ result: GAME_RESULT_TIE })
    }
  }

  setPlayer(e, size, selectedOption) {
    this.setState({currentPlayer: 'PlayerOne'});
    this.setState({currentSizeOption: size});
    this.setState({selectedOption: selectedOption});
  }

  playerOneInputUsed(inputOption) {
    return _.includes(this.state.playerOneInput, inputOption);
  }

  playerOneInputSelected(inputOption) {
    return this.state.selectedOption === inputOption;
  }

  render() {
    const { userInputs, AIInputs, result, selectedOption } = this.state

    return (
        <ImageBackground style={styles.container} source={require('../images/wood.png')}>
          <View style={styles.playerOne}>
            <TouchableWithoutFeedback onPress={e => this.setPlayer(e, 'big', PLAYER_ONE_OPTION_1)}>
              <Circle
                  key='playerOneBig'
                  xTranslate={PLAYER_POINTS[0].x}
                  yTranslate={PLAYER_POINTS[0].y}
                  color='deepskyblue'
                  size="big"
                  used={this.playerOneInputUsed(PLAYER_ONE_OPTION_1)}
                  selected={this.playerOneInputSelected(PLAYER_ONE_OPTION_1)}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={e => this.setPlayer(e, 'medium', PLAYER_ONE_OPTION_2)}>
              <Circle
                  key='playerOneMedium'
                  xTranslate={PLAYER_POINTS[1].x}
                  yTranslate={PLAYER_POINTS[1].y}
                  color='deepskyblue'
                  size="medium"
                  used={this.playerOneInputUsed(PLAYER_ONE_OPTION_2)}
                  selected={this.playerOneInputSelected(PLAYER_ONE_OPTION_2)}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={e => this.setPlayer(e, 'small', PLAYER_ONE_OPTION_3)}>
              <Circle
                  key='playerOneSmall'
                  xTranslate={PLAYER_POINTS[2].x}
                  yTranslate={PLAYER_POINTS[2].y}
                  color='deepskyblue'
                  size="small"
                  used={this.playerOneInputUsed(PLAYER_ONE_OPTION_3)}
                  selected={this.playerOneInputSelected(PLAYER_ONE_OPTION_3)}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={e => this.setPlayer(e, 'big', PLAYER_ONE_OPTION_4)}>
              <Circle
                  key='playerOneBig'
                  xTranslate={PLAYER_POINTS[3].x}
                  yTranslate={PLAYER_POINTS[3].y}
                  color='deepskyblue'
                  size="big"
                  used={this.playerOneInputUsed(PLAYER_ONE_OPTION_4)}
                  selected={this.playerOneInputSelected(PLAYER_ONE_OPTION_4)}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={e => this.setPlayer(e, 'medium',  PLAYER_ONE_OPTION_5)}>
              <Circle
                  key='playerOneMedium'
                  xTranslate={PLAYER_POINTS[4].x}
                  yTranslate={PLAYER_POINTS[4].y}
                  color='deepskyblue'
                  size="medium"
                  used={this.playerOneInputUsed(PLAYER_ONE_OPTION_5)}
                  selected={this.playerOneInputSelected(PLAYER_ONE_OPTION_5)}
              />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={e => this.setPlayer(e, 'small', PLAYER_ONE_OPTION_6)}>
              <Circle
                  key='playerOneSmall'
                  xTranslate={PLAYER_POINTS[5].x}
                  yTranslate={PLAYER_POINTS[5].y}
                  color='deepskyblue'
                  size="small"
                  used={this.playerOneInputUsed(PLAYER_ONE_OPTION_6)}
                  selected={this.playerOneInputSelected(PLAYER_ONE_OPTION_6)}
              />
            </TouchableWithoutFeedback>

          </View>
          <TouchableWithoutFeedback onPress={e => this.boardClickHandler(e)}>
            <View style={styles.board}>
              <View
                  style={styles.line}
              />
              <View
                  style={[styles.line, {
                    width: 3,
                    height: 306,
                    transform: [
                      {translateX: 200}
                    ]
                  }]}
              />
              <View
                  style={[styles.line, {
                    width: 306,
                    height: 3,
                    transform: [
                      {translateY: 100}
                    ]
                  }]}
              />
              <View
                  style={[styles.line, {
                    width: 306,
                    height: 3,
                    transform: [
                      {translateY: 200}
                    ]
                  }]}
              />
              {
                userInputs.map((d, i) => (
                    <Circle
                        key={i}
                        xTranslate={CENTER_POINTS[d.position].x}
                        yTranslate={CENTER_POINTS[d.position].y}
                        color='deepskyblue'
                        size={d.size}
                    />
                ))
              }
              {
                AIInputs.map((d, i) => (
                    <Cross
                        key={i}
                        xTranslate={CENTER_POINTS[d.position].x}
                        yTranslate={CENTER_POINTS[d.position].y}
                    />
                ))
              }
            </View>
          </TouchableWithoutFeedback>
          <PromptArea result={result} onRestart={() => this.restart()} />
        </ImageBackground>
    );
  }
}

export default TutorialScreen;
