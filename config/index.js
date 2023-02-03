var configValues = require("./config");

module.exports = {
    getDbConnectionString: function () {
        //return `mongodb://${configValues.username}:${configValues.password}@${configValues.hostname}/${configValues.database}`;
        return `mongodb://${process.env.DB_USER_NAME}:${configValues.DB_USER_PWD}@${configValues.DB_HOST}/${configValues.DB_NAME}`;
    }
}
