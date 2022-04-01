const { Sequelize, DataTypes } = require( 'sequelize' );

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbDialect = process.env.DB_DIALECT;
const dbLogging = false;
const dbPool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}

const sequelizeConnection = new Sequelize( dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: dbDialect,
    pool: dbPool,
    logging: dbLogging
} )

sequelizeConnection.authenticate()
                   .then( () => {
                       console.log( 'DATABASE CONNECTED' );
                   } )
                   .catch( err => {
                       console.log( `Error: ${ err }` );
                   } )

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelizeConnection;

db.articles = require( './models/Article' )( sequelizeConnection, DataTypes );

db.sequelize.sync( { force: false } )
  .then( () => {
      console.log( 'DATABASE RE-SYNCED' );
  } )

module.exports = db;