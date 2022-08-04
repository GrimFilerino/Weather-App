/**
 * MIDDLEWEARS
 * contains all middlewears
 * @author GrimFilerino
 */


/**
 * Middlewear that logs all request
 */
function showRequestOnLoad(req, res, next){
    console.info(`Got request on ${req.path} (${req.ip}).`);
    next();
}


/**
 * Middlewear that fixes cors header error
 */
function enableCors(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
}

module.exports = {
    showRequestOnLoad: showRequestOnLoad,
    enableCors: enableCors
};