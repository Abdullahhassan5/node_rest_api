# Node JS Rest API 

A basic project for building NodeJS RESTful API using Node.js, Express & mysql

Postman used for API testing

# Installing all packages 

npm install

npm init --yes

npm i mysql // for mysql

npm i express 

npm i -g nodemon // changes will updated just saving the file

To start: nodemon index.js 

# Rest Api

get /user         list of all users 

get /user/:id     get user by id 

post /user        create a new user

put /user/:id     update user by id 

delete /user/:id  delete by id

http://localhost:3000/user/

# Mysql Database Credentials
    const dbConn = mysql.createConnection
	
    host: 'localhost',
	
    user: 'root',
	
    password: 'password',
	
    database: 'node_mysql_crud_db'
