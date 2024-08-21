const { Model } = require('objection');
const knex = require('knex');
const knexfile = require('./knexfile');
import dotenv from "dotenv"
dotenv.config()
function initializeDb() {
    const knexInstance = knex(knexfile.development);
    Model.knex(knexInstance);
    console.log('Database initialized and bound to Objection Model');
}

module.exports = initializeDb;
