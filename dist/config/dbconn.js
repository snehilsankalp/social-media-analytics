"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Posts_1 = require("../models/Posts");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'analytics',
    logging: true,
    entities: [Posts_1.Posts],
    migrations: [],
});
AppDataSource.initialize()
    .then(() => {
    console.log("Connected to Database");
})
    .catch((err) => console.log(`Error connecting db ${err}`));
exports.default = AppDataSource;
//# sourceMappingURL=dbconn.js.map