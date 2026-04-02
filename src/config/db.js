import dotenv from 'dotenv';
import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: Number(process.env.MYSQL_PORT),
});

connection.connect((err) => {
  if(err){
    console.log("Verification Error:",err);
    return process.exit(1);
  }
  console.log("Verification Sucessfull");
});

export default connection;
