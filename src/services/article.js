const articleDAL = require( '../database/dal/article' );

const addArticle = async ( articleDTO, req ) => {
    console.log( 'ArticleService:addArticle::Entering' );

    articleDTO.success = true;
    const data = {}

    if ( articleDTO.success && !req.body.title ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = "Article Title Unavailable";
    }

    if ( articleDTO.success && !req.body.description ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = "Article Title Unavailable";
    }

    if ( articleDTO.success ) {
        data.title = req.body.title;
        data.description = req.body.description;

        if ( req.body.author ) {
            data.author = req.body.author;
        }

        if ( req.body.followUpURL ) {
            data.followUpURL = req.body.followUpURL;
        }

        articleDTO.articleData = data;
        articleDTO = await articleDAL.addArticle( articleDTO );
    }


    console.log( 'ArticleService:addArticle::Exiting' );
    return articleDTO;
}

const getAllArticles = async ( articleDTO ) => {
    console.log( 'ArticleService:getAllArticles::Entering' );

    articleDTO = await articleDAL.getAllArticles( articleDTO );

    console.log( 'ArticleService:getAllArticles::Exiting' );
    return articleDTO;
}

const getArticle = async ( articleDTO, req ) => {
    console.log( 'ArticleService:getArticle::Entering' );

    articleDTO.success = true;

    if ( articleDTO.success && !req.params.id ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = 'Article id unavailable';
    }

    if ( articleDTO.success ) {
        articleDTO = await articleDAL.getArticle( articleDTO, req.params.id );
    }

    console.log( 'ArticleService:getArticle::Exiting' );
    return articleDTO;
}

const updateArticle = async ( articleDTO, req ) => {
    console.log( 'ArticleService:updateArticle::Entering' );
    articleDTO.success = true;

    if ( articleDTO.success && !req.params.id ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = 'Article id unavailable';
    }

    const data = {}

    if ( req.body.title ) {
        data.title = req.body.title;
    }

    if ( req.body.description ) {
        data.description = req.body.description;
    }

    if ( req.body.author ) {
        data.author = req.body.author;
    }

    if ( req.body.followUpURL ) {
        data.followUpURL = req.body.followUpURL;
    }

    if(Object.keys(data).length === 0) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = 'No data to update article';
    }

    if ( articleDTO.success ) {
        articleDTO.articleData = data;
        articleDTO = await articleDAL.updateArticle( articleDTO, req.params.id );
    }

    console.log( 'ArticleService:updateArticle::Exiting' );
    return articleDTO;
}

const deleteArticle = async ( articleDTO, req ) => {
    console.log( 'ArticleService:deleteArticle::Exiting' );

    articleDTO.success = true;

    if ( articleDTO.success && !req.params.id ) {
        articleDTO.success = false;
        articleDTO.status = 500;
        articleDTO.description = 'Article id unavailable';
    }

    if ( articleDTO.success ) {
        articleDTO = await articleDAL.deleteArticle( articleDTO, req.params.id );
    }

    console.log( 'ArticleService:deleteArticle::Exiting' );
    return articleDTO;
}

module.exports = {
    addArticle: addArticle,
    getArticle: getArticle,
    getAllArticles: getAllArticles,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle
}