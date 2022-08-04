/**
 *  GEOCODE API 
 *  gets the latitude and longitude of an address
 *  @author GrimFilerino 
 **/

/**
 * 
 * @param {address} address 
 * @returns two setts of latitude and longitude for address
 */
async function getCords(address){
    const fetch = require('node-fetch');
  
    let uri = 'https://api.geocode.earth/v1/search?api_key=ge-9b10b73ae04e5259&text=';

    const url = uri + address;
  
    const options = {
        method: 'GET'
    };
    
    let req = new fetch.Request(url,options);
   
    return fetch(req)
        .then((res) => res.json())
  
        .then(res => {
            return res.bbox;
        })
  
        .catch((err) => {
            console.log("ERROR:", err.message);
        })
}
  
module.exports = {
    getCords: getCords
};
