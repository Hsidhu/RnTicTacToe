import React from "react";
import { View, Text, Button } from "react-native";
import UserCards from '../components/UserCards';

class PokeroddScreen extends React.Component {

  static navigationOptions = {
    title: 'Poker odds',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <UserCards/>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default PokeroddScreen;
