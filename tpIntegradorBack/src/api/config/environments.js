import dotenv from "dotenv"

dotenv.config();

export default{
    port: process.env.PORT,
    database:{
        host: process.env.DB_HOST,
        name: process.env.NAME,
        user: process.env.USER,
        password: process.env.PASSWORD,
    }
}