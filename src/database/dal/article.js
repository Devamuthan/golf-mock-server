const db = require( '../index' );

const Article = db.articles;

const addArticle = async ( articleDTO ) => {
    console.log( 'ArticleDAL:addArticle::Entering' );

    try {
        const article = await Article.create( articleDTO.articleData );
        articleDTO.success = true;
        articleDTO.status = 200;
        articleDTO.description = "Article added to database";
    } catch ( err ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = err.message;
    }
    articleDTO.articleData = null;

    console.log( 'ArticleDAL:addArticle::Exiting' );
    return articleDTO;
}

const getAllArticles = async ( articleDTO ) => {
    console.log( 'ArticleDAL:getAllArticles::Entering' );

    try {
        const articles = await Article.findAll( {} );
        articleDTO.success = true;
        articleDTO.status = 200;
        articleDTO.description = "Articles fetched from database";
        articleDTO.articleData = articles;
    } catch ( err ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = err.message;
        articleDTO.articleData = null;
    }

    console.log( 'ArticleDAL:getAllArticles::Exiting' );
    return articleDTO;
}

const getArticle = async ( articleDTO, articleId ) => {
    console.log( 'ArticleDAL:getArticle::Entering' );

    try {
        const article = await Article.findAll( {
            where: {
                id: articleId
            }
        } );

        articleDTO.success = true;
        articleDTO.status = 200;
        articleDTO.description = "Article fetched from database";
        articleDTO.articleData = article;

    } catch ( err ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = err.message;
        articleDTO.articleData = null;
    }

    console.log( 'ArticleDAL:getArticle::Exiting' );
    return articleDTO;
}

const updateArticle = async ( articleDTO, articleId ) => {
    console.log( 'ArticleDAL:updateArticle::Entering' );
    try {
        await Article.update(
            articleDTO.articleData,
            {
                where: {
                    id: articleId
                }
            }
        )
        articleDTO.success = true;
        articleDTO.status = 200;
        articleDTO.description = "Article updated to database";
        articleDTO.articleData = null;
    } catch ( err ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = err.message;
        articleDTO.articleData = null;
    }

    console.log( 'ArticleDAL:updateArticle::Exiting' );
    return articleDTO;
}

const deleteArticle = async ( articleDTO, articleId ) => {
    console.log( 'ArticleDAL:deleteArticle::Entering' );
    try {
        await Article.destroy( {
            where: {
                id: articleId
            }
        } )
        articleDTO.success = true;
        articleDTO.status = 200;
        articleDTO.description = "Article deleted from database";
        articleDTO.articleData = null;
    } catch ( err ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = err.message;
        articleDTO.articleData = null;
    }
    console.log( 'ArticleDAL:deleteArticle::Exiting' );
    return articleDTO;
}

module.exports = {
    addArticle: addArticle,
    getArticle: getArticle,
    getAllArticles: getAllArticles,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle
}