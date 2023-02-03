var configValues = require("./config");

module.exports = {
    getDbConnectionString: function () {
        //return `mongodb://${configValues.username}:${configValues.password}@${configValues.hostname}/${configValues.database}`;
        return `mongodb://${process.env.DB_USER_NAME}:${process.env.DB_USER_PWD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
    }
}
