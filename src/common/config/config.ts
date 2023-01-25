import {UserEntity} from "../../app/entity/user/user.entity";

export default () => ({
    type: "mysql",
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT) || 3306,
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD || "password",
    database: process.env.DATABASE_NAME || "database",
    entities: [UserEntity],
    synchronize: true
});