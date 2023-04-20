import { ActionTypes } from "../constants/actiontypes";

const initialstate = {
    weather:{},

}
console.log(initialstate)

export const weathereducers = (state = initialstate,{type,payload}) =>{
    switch(type){
        case ActionTypes.SET_WEATHER:
            return {...state,weather:payload};

     default:
            return state;
    }
   
};