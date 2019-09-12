import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground
} from 'react-native'

export default class Circle extends Component {

  renderCrossOut() {
    const {used} = this.props;
    if(used) {
      return <ImageBackground style={[styles.crossOut]}
                              source={require('../images/crossout.png')}/>;
    }
    return null;
  }

  render() {
    const { xTranslate, yTranslate, size, selected } = this.props;
    const selectedColor = selected ? 'optionHover': '';

    return (
        <View {...this.props}  style={[
          styles.squareContainer,
          styles[selectedColor], {
          transform: [
            {translateX: xTranslate ? xTranslate : 10},
            {translateY: yTranslate ? yTranslate : 10},
          ],
        }]}>
          <ImageBackground
            source={require('../images/obig.png')}
              style={[
              styles.container,
              styles[size]
          ]}>
            {this.renderCrossOut()}
          </ImageBackground>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareContainer: {
    position: 'absolute',
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionHover: {
    borderColor: 'red',
    borderWidth: 2
  },
  innerCircle: {
    backgroundColor: '#F5FCFF',
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  crossOut: {
    width: '100%',
    height: '100%'
  },
  big: {
    width: 60,
    height: 60
  },
  innerCirclebig: {
    width: 50,
    height: 50
  },
  medium: {
    width: 40,
    height: 40
  },
  innerCirclemedium: {
    width: 30,
    height: 30
  },
  small: {
    width: 20,
    height: 20
  },
  innerCirclesmall: {
    width: 10,
    height: 10
  }
});