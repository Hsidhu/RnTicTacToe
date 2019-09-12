import React from "react";
import { View, Button } from "react-native";

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Tutorial"
          onPress={() => this.props.navigation.navigate('Tutorial')}
        />
        <Button
          title="Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

export default HomeScreen;
