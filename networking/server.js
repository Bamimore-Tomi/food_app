import React, {Component} from 'react-native'
import {AppRegistry, Platform, Text, View } from 'react-native'

const apiGetAllFoods = 'https://0d9942dd258d.ngrok.io/api/all_food'
const apiInsertNewFood= 'https://0d9942dd258d.ngrok.io/api/add_food';
const apiUpdateAfood= 'https://0d9942dd258d.ngrok.io/api/update_food/';
async function getFoodsFromServer(){
    try{
        let response = await fetch(apiGetAllFoods,
            {   
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            let responseJson= await response.json();
            return responseJson.data; 
    }catch (error){
            console.error(error)
    }
}
//send post request to insert new data
async function insertNewFoodToServer(params){
    try {
        let response = await fetch( apiInsertNewFood, {
            method: 'POST',
            headers:{
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson= await response.json();
        return responseJson.result;
    } catch(error){
        console.error(error);
    }

}

async function updateAFood(params, id){
    try{
        let response = await fetch(apiUpdateAfood+id, {
            method: 'PATCH',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'

            },
            body: JSON.stringify(params)
        });
        let responseJson= await response.json();
        return responseJson.result;

    } catch(error){
        console.error(error);
    }
}
export {updateAFood}
export {insertNewFoodToServer}
export {getFoodsFromServer}