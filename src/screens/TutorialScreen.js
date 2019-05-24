import React from "react";
import { View, Text, Button } from "react-native";

class TutorialScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Tutorial',
  };

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Tutorial Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }

  export default TutorialScreen;
