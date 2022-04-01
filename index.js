const express = require( 'express' );
const path = require( 'path' );
const articleController = require( './src/controllers/article' );

require( 'dotenv' ).config( { path: './env' } );

const app = express();

const PORT = process.env.PORT || 3000

app.get( '/', ( req, res ) => {
    console.log( 'Welcome to golf-mock-server' );
    res.json( { message: 'Welcome to golf-mock-server' } )
    res.end();
} )

app.use( '/article', articleController );

app.listen( PORT, () => console.log( `Server running at http://localhost:${ PORT }` ) );