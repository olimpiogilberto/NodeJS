import https from "https";
import fs from "fs";

module.exports = app => {
  app.db.sequelize.sync().done(() => {
    https.createServer(credentials, app)
      .listen(app.get("port"), () => {
        console.log(`NTask API - porta ${app.get("port")}`);
      });

    });
};
