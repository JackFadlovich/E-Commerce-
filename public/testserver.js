const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("../config/connections");
const { User } = require("../models");  // Adjust the path if needed
