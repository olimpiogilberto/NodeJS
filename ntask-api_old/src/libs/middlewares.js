module.exports = app => {
  app.set("port", 8080);
  app.set("json spaces", 4);
  app.use(auth.iniatilize());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

};