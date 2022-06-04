import express from "express";
import consign from "consign";

const app = express();

consign()
    .include("src/libs/config.js")
    .then("db.js")
    .then("src/auth.js")
    .then("src/libs/middlewares.js")
    .then("src/routes")
    .then("src/libs/boot.js")
    .into(app);

