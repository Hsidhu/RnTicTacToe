import React, { Component } from 'react';
import {Text, TextInput, View, Button } from 'react-native';
import {CardGroup, OddsCalculator} from 'poker-odds-calculator';

class UserCards extends Component{
    constructor(props) {
        super(props);
        this.state = {
            p1:'JdJs',
            p2:'Ts7h',
            board:'6d4dQs',
            result:'',
            text: ''
        };
        this.onPressHandler = this.onPressHandler.bind(this);
    }
    componentDidMount(){
      this.onPressHandler();
    }

    onPressHandler = () => {
        let player1Cards = CardGroup.fromString(this.state.p1);
        let player2Cards = CardGroup.fromString(this.state.p2);
        let board = CardGroup.fromString(this.state.board);
        let result = OddsCalculator.calculate([player1Cards, player2Cards], board);
        this.setState({result});
    }
    
    render() {
        return (
          <View style={{padding: 10}}>
            <Text>player-1 - {this.state.result ? this.state.result.equities[0].getEquity() : ''}%</Text>
            <Text>player-2 - {this.state.result ? this.state.result.equities[1].getEquity() : ''}%</Text>
        
            <TextInput style={{height: 40}} placeholder="Your cards e.g JdJs"
            value={this.state.p1}
              onChangeText={(p1) => this.setState({p1})}
            />
            <TextInput style={{height: 40}} placeholder="Second players cards e.g Ts7h"
              value={this.state.p2}
              onChangeText={(p2) => this.setState({p2})}
            />
            <TextInput style={{height: 40}} placeholder="Board Cards e.g 6d4dQs"
              value={this.state.board}
              onChangeText={(board) => this.setState({board})}
            />
            <Text style={{padding: 6, fontSize: 24}}>
                {this.state.p1} - {this.state.board}
            </Text>

            <Button title="Submit" onPress={this.onPressHandler}/>
        </View>
        )
    }
}

export default UserCards
