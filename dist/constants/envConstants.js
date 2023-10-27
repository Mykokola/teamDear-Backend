"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.MONGO_DB_USER = exports.MONGO_DB_PASSWORD = exports.MONGO_DB_DATABASE = exports.MONGO_DB_HOST = void 0;
const dotenv = require('dotenv');
dotenv.config();
const { MONGO_DB_HOST, MONGO_DB_DATABASE, MONGO_DB_PASSWORD, MONGO_DB_USER, JWT_SECRET } = process.env;
exports.MONGO_DB_HOST = MONGO_DB_HOST;
exports.MONGO_DB_DATABASE = MONGO_DB_DATABASE;
exports.MONGO_DB_PASSWORD = MONGO_DB_PASSWORD;
exports.MONGO_DB_USER = MONGO_DB_USER;
exports.JWT_SECRET = JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('Please setup JWT_SECRET');
}
if (!MONGO_DB_HOST) {
    throw new Error('Please setup MONGO_DB_HOST');
}
if (!MONGO_DB_DATABASE) {
    throw new Error('Please setup MONGO_DB_DATABASE');
}
if (!MONGO_DB_PASSWORD) {
    throw new Error('Please setup MONGO_DB_PASSWORD');
}
if (!MONGO_DB_USER) {
    throw new Error('Please setup MONGO_DB_USER');
}
//# sourceMappingURL=envConstants.js.map