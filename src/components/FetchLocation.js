import React from 'react';
import {Button} from 'react-native'


const FetchLocation = props => {


    return(
        <Button title="Click Me" onPress={props.pressHandler}/>
    )

}

export default FetchLocation
