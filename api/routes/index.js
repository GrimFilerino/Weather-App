/**
 *  INDEX.JS FOR ROUTES 
 *  all the routes in the webserver
 *  @author GrimFilerino 
 **/


const { application } = require("express");
const express = require("express");
const router = express.Router();


/**
 * Get geocords from api
 * resives two sets of latitude 
 * and longitude
 */
router.post("/cords", async (req, res) => {
    const pos = require("../src/getCords.js");

    let data = {
        res: ""
    };

    data.res = await pos.getCords(req.body.text);
    
    res.send(data.res);
});

/**
 * Recive post request from angular with 
 * longitude, latitude and date
 * send data back
 */
router.post("/", async (req, res) => {
    const weather = require("../src/getWeather.js");

    let data = {
        res: ""
    };

    let lat = req.body.lat;
    let lon = req.body.lon;
    let date = req.body.date;

    data.res = await weather.getAvgWeatherOnDate(lat, lon, date);
    console.log(data.res);
    res.send(data.res);
});


module.exports = router;