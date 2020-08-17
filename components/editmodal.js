import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';
import { updateAFood } from '../networking/server';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            foodName: '',
            foodDescription: ''
        };
    }
    showEditModal = (editingFood, flatlistItem) => {
        console.log('editing food =' + editingFood._id);
        this.setState({
            key: editingFood._id,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatlistItem: flatlistItem
        })
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});        
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New food's information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}           
                    onChangeText={(text) => this.setState({ foodName: text })}
                    placeholder="Enter new food's name"
                    value={this.state.foodName}                 
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    
                    onChangeText={(text) => this.setState({ foodDescription: text })}
                    placeholder="Enter  food's description"
                    value={this.state.foodDescription}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                         if (this.state.foodName.length == 0 || this.state.foodDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }       
                        //Update existing Food
                        // var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        // if (foundIndex < 0) {
                        //     return; //not found
                        // }
                        // flatListData[foundIndex].name = this.state.foodName;
                        // flatListData[foundIndex].foodDescription = this.state.foodDescription;
                        let params={
                            food_id:this.state.key,
                            name: this.state.foodName,
                            foodDescription: this.state.foodDescription
                        }
                        generateKey = (numberOfCharacters) => {
                            return require('random-string')({length: numberOfCharacters});        
                        }
                        updateAFood(params, params.food_id).then((result)=>{
                          if (result === 'ok'){
                              this.state.flatlistItem.refreshFlatListItem({
                                  _id:this.state.key,
                                  name: this.state.foodName,
                                  foodDescription: this.state.foodDescription
                              });
                              this.refs.myModal.close();  
                          }
                        }).catch((error) =>{
                            console.log(error)
                            this.refs.myModal.close();  
                        });
                        //Refresh flatlist item
                        // this.state.flatlistItem.refreshFlatListItem();
                        // this.refs.myModal.close();                                                                       
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}