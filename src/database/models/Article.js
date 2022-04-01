module.exports = ( sequelize, DataTypes ) => {
    return sequelize.define( "article", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        author: DataTypes.STRING,
        followUpURL: DataTypes.STRING
    }, {
        tableName: 'articles'
    } )
}