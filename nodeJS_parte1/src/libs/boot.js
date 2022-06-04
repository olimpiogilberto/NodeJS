module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`boot.js - API Startada na porta ${app.get("port")}`);
        });
    });
}
