const { defineConfig } = require("cypress");
const mysql = require("mysql");

const connections = {
    beta: {
        host: "zuju-aurora-beta.cluster-cp6rvtvzbl0l.ap-southeast-1.rds.amazonaws.com",
        user: "zujuqa",
        password: "xxxxxxx",
        database: "db_beta",
    },
};

// querying the database from Node
function queryDB(connectionInfo, query) {
    const connection = mysql.createConnection(connectionInfo);
    connection.connect();
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }
            connection.end();
            return resolve(results);
        });
    });
}

module.exports = defineConfig({
    projectId: "4jcqzc",
    defaultCommandTimeout: 10000,
    env: {
        TOKEN_PATH: "./cypress/fixtures/accessToken.txt",
    },
    e2e: {
        specPattern: "cypress/e2e/**",
        baseUrl: "https://github.com",
        setupNodeEvents(on, config) {
            on("task", {
                queryDatabase({ dbName, query }) {
                    const connectionInfo = connections[dbName];
                    if (!connectionInfo) {
                        throw new Error(
                            `Do not have DB connection under name ${dbName}`
                        );
                    }
                    return queryDB(connectionInfo, query);
                },
            });
        },
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    browser: "chrome",
    video: false,
});
