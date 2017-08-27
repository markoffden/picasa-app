module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, GData-Version");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
};