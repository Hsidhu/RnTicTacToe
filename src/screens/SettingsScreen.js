import React from "react";
import { View, Text, Button } from "react-native";

class SettingsScreen extends React.Component {

    static navigationOptions = {
        title: 'Settings',
    };

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
}

export default SettingsScreen;
