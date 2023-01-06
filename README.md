# API Sequelize

This project is for a study of Sequelize as ORM and the design pattern MVC.
It is a simple project with 4 tables on MySQL, with routes, services and controllers to manipulate their data.
I used only javascript, NodeJS and the Sequelize at backend.
Now I will create the frontend of project with angular probaly(I am studying this question).

## How to install

Import in insonmia the file "routes_insonmia";
Open the file project in VsCode or other EDI, and open the terminal;
Run "Npm install" for install necessary dependencies;
Run "Npm run dev" to init server;
Install MySQL and create a database to store data;
Config the database name and its infos in the file "config.json". (src >> config >> config.json)
Insert your data as example:
"development": {
    "username": "root",
    "password": "admin",
    "database": "yourDataBaseNameHere",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
Run "npx sequelize-cli db:migrate" for create tables;
Run "npx sequelize-cli db:seed:all" for migrate and create data in tables;

Now your application is done for enjoy and do tests;
