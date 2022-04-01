class ArticleDTO {
    get status() {
        return this._status;
    }

    set status( value ) {
        this._status = value;
    }

    get success() {
        return this._success;
    }

    set success( value ) {
        this._success = value;
    }

    get description() {
        return this._description;
    }

    set description( value ) {
        this._description = value;
    }

    get articleData() {
        return this._articleData;
    }

    set articleData( value ) {
        this._articleData = value;
    }

    get json() {
        return {
            status: this.status,
            success: this.success,
            description: this.description,
            articleData: this.articleData
        }
    }

    _status = null;
    _success = null;
    _description = null;
    _articleData = null;
}

module.exports = ArticleDTO;