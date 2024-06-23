import mysql from "promise-mysql"

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "",
    }
);

export default connectionl;