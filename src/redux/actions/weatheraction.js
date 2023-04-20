import axios from 'axios';
import { ActionTypes } from '../constants/actiontypes';

export const setWeather = (cityName) => {
    return (dispatch) => {
        return axios
          .get(`https://open-weather13.p.rapidapi.com/city/${cityName}`,{headers:{
            'X-RapidAPI-Key': '909d75aaf2msh574a95b8fe4ea40p17ef85jsn346292be1cf7',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
          }})
          .then((response) => {
            if (response?.status === 200) {
              dispatch({
                type: ActionTypes.SET_WEATHER,
                payload: response.data,

              });
              console.log(response,"ABC.....")

              
              return Promise.resolve(response);
            }
          })
          .catch((err) => {
            return Promise.resolve(err);
          });
      };
};