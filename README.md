# API Sequelize

This project is for a study of Sequelize as ORM and the design pattern MVC.<br>
It is a simple project with 4 tables on MySQL, with routes, services and controllers to manipulate their data.<br>
I used only javascript, NodeJS and the Sequelize at backend.<br>
The next step is to create the frontend of project with angular probaly(I am studying this question).<br>

## How to install

Import in insonmia the file "routes_insonmia";<br>
Open the file project in VsCode or other EDI, and open the terminal;<br>
Run "Npm install" for install necessary dependencies;<br>
Run "Npm run dev" to init server;<br>
Install MySQL and create a database to store data;<br>
Config the database name and its infos in the file "config.json". (src >> config >> config.json)<br>
<br>
Insert in your file as the example:<br>
"development": {<br>
  "username": "root",<br>
  "password": "admin",<br>
  "database": "yourDataBaseNameHere",<br>
  "host": "127.0.0.1",<br>
  "dialect": "mysql"<br>
}<br>
<br>
Run "npx sequelize-cli db:migrate" for create tables;<br>
Run "npx sequelize-cli db:seed:all" for migrate and create data in tables;<br>
<br>
Now your application is done for enjoy and make tests;<br>
