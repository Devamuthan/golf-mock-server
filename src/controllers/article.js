const express = require( 'express' );
const router = express.Router();
const articleService = require( '../services/article' );
const ArticleDTO = require( '../dto/article' );
const bodyParser = require( 'body-parser' );

router.use( bodyParser.json() )
router.use( bodyParser.urlencoded( { extended: false } ) )

router.route( '/' )
      .get( async ( req, res ) => {
          console.log( 'ArticleController:getAllArticles::Entering' );

          const articleDTO = await articleService.getAllArticles( new ArticleDTO() );

          res.status( articleDTO.status ).json( articleDTO.json );
          console.log( 'ArticleController:getAllArticles::Exiting' );
          res.end();
      } )
      .post( async ( req, res ) => {
          console.log( 'ArticleController:addArticle::Entering' );

          const articleDTO = await articleService.addArticle( new ArticleDTO(), req )

          res.status( articleDTO.status ).json( articleDTO.json );
          console.log( 'ArticleController:addArticle::Exiting' );
          res.end();
      } );

router.route( '/:id' )
      .get( async ( req, res ) => {
          console.log( 'ArticleController:getAllArticles::Entering' );

          const articleDTO = await articleService.getArticle( new ArticleDTO(), req );

          res.status( articleDTO.status ).json( articleDTO.json );
          console.log( 'ArticleController:getAllArticles::Exiting' );
          res.end();
      } )
      .put( async ( req, res ) => {
          console.log( 'ArticleController:updateArticle::Entering' );

          const articleDTO = await articleService.updateArticle( new ArticleDTO(), req );

          res.status( articleDTO.status ).json( articleDTO.json );
          console.log( 'ArticleController:updateArticle::Exiting' );
          res.end();
      } )
      .delete( async ( req, res ) => {
          console.log( 'ArticleController:deleteArticle::Entering' );

          const articleDTO = await articleService.deleteArticle( new ArticleDTO(), req );

          res.status( articleDTO.status ).json( articleDTO.json );
          console.log( 'ArticleController:deleteArticle::Exiting' );
          res.end();
      } );

module.exports = router;