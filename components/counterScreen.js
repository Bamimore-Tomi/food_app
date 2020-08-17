import React, {useReducer} from 'react'
import {Text, View, StyleSheet, Button, FlatList} from "react-native"
import { Colors } from 'react-native/Libraries/NewAppScreen'

const reducer = (state, action) =>{
    switch(action.colorToChange){
        case 'red':
            return {...state, red : state.red + action.amount}
        case 'green':
            return {...state, green: state.green + action.amount}
        case 'blue':
            return {...state, blue: state.blue + action.amount}
        default:
            return state;
    }
};


export default function ColorScreen(){  
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
    console.log(`rgb(${state.red}, ${state.green},${state.blue})`)
    return (<View style={styles.view1}>
        <View style = {{marginTop:5, paddingTop:2}}>
            <Text style={styles.texts}>RED</Text>
            <Button 
            title= "More Red"
            onPress={() => dispatch( { colorToChange: 'red', amount: 10 }) } 
            />
            <Button 
            title = "Less Red"
            onPress={() => dispatch({ colorToChange: 'red', amount: -10})}
            />
        </View>
        <View>
            <Text style={styles.texts}>Green</Text>
            <Button 
            title= "More Green"
            onPress={() => dispatch({ colorToChange: 'green', amount: 10})}
            />
            <Button 
            title = "Less Green"
            onPress={() => dispatch({colorToChange: 'green', amount: -10})}
            />           

        </View>
        <View>
            <Text style={styles.texts}>Blue</Text>

            <Button 
            title= "More Blue"
            onPress={() => dispatch({colorToChange: 'blue', amount: 10})}           
            />
            <Button 
            title = "Less Blue"
            onPress={() => dispatch({colorToChange: 'blue', amount: -10})}
            />
        </View>
        <View>
            <View style={{marginTop:5,height:100, width: 100, backgroundColor:`rgb(${state.red}, ${state.green},${state.blue})` }} ></View>
        </View>

    </View>
    )
}  
const styles = StyleSheet.create({
    view1:{
        marginTop:20,
        paddingVertical:8
    },
    texts:{
        marginTop:5,
        paddingTop: 5,
        paddingVertical:10,
        paddingLeft:8,
        textAlign: 'left',
        fontSize: 20

    }
})