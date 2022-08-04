/**
 *  DARKSKY API FUNCTION 
 *    GET WEATHER
 *  @author GrimFilerino
 **/

//node-fetch cant use require if its intallations is above 2.6.6
//npm install node-fetch@2.6.6

/**
 * 
 * @param {*latitude} lat 
 * @param {*logidtude} lon 
 * @param {*date of weather} date 
 * @returns weather by hour
 */

async function getAvgWeatherOnDate(lat, lon, date){
    const fetch = require('node-fetch');
  
    let darksky = 'https://dark-sky.p.rapidapi.com/';

    let param = '?units=si&exclude=minutely&lang=en';
  
    const url = darksky + lat + ',' + lon + ',' + date + param;
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cdcb5eb126msh4ca899a4795313ep1af64cjsna05d41fd9404',
        'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
      }
    };
    

    let req = new fetch.Request(url,options);
   
    return fetch(req)
      .then((res) => res.json())
  
      .then(res =>{

        return res.hourly.data;
      })
  
      .catch((err) => {
        console.log("ERROR:", err.message);
      })
}
  
module.exports = {
  getAvgWeatherOnDate: getAvgWeatherOnDate
};
