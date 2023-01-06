# API Sequelize

This project is for a study of Sequelize as ORM and the design pattern MVC.<br>
It is a simple project with 4 tables on MySQL, with routes, services and controllers to manipulate their data.<br>
I used only javascript, NodeJS and the Sequelize at backend.<br>
Now I will create the frontend of project with angular probaly(I am studying this question).<br>

## How to install

Import in insonmia the file "routes_insonmia";<br>
Open the file project in VsCode or other EDI, and open the terminal;<br>
Run "Npm install" for install necessary dependencies;<br>
Run "Npm run dev" to init server;<br>
Install MySQL and create a database to store data;<br>
Config the database name and its infos in the file "config.json". (src >> config >> config.json)<br>
Insert your data as example:<br>
"development": {<br>
&nbsp&nbsp&nbsp"username": "root",<br>
&nbsp&nbsp&nbsp"password": "admin",<br>
&nbsp&nbsp&nbsp"database": "yourDataBaseNameHere",<br>
&nbsp&nbsp&nbsp"host": "127.0.0.1",<br>
&nbsp&nbsp&nbsp"dialect": "mysql"<br>
&nbsp&nbsp}<br>
Run "npx sequelize-cli db:migrate" for create tables;<br>
Run "npx sequelize-cli db:seed:all" for migrate and create data in tables;<br>
<br>
Now your application is done for enjoy and do tests;<br>
