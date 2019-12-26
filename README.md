
# angular-express-mysql
angular user management, express as backend and mysql as db

### demo 
http://116.203.25.121/list-user


## how to install 
There are 2 main folders. Client and server. 
## 1. Create Database

Import data.sql to your database
you can do it from phpmyadmin or by 
```
mysql -u <username> -p<password <data.sql
```

## 2. Install Angular
Please follow these instructions - 
https://www.javatpoint.com/angular-8-installation

## 3. After Angular is installed in your computer
```
cd client
npm install 
ng serve
```
angular now will run on http://localhost:4200

## 4. Run the server

Edit file dbconnection.js to direct to your Mydsql
this how the file is 

```
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '8889',
  database: 'namedatabase'
});
module.exports = connection;
```
Please make sure the user password and ports are ok. 
After the db is defined, please run the following - 

```
cd server
npm install 
npm run dev
```
now the server runs on http://localhost:3000

## 5. if you want to test just the api - please this address to your browswer
http://localhost:3000/users
