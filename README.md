# Community Forum

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Includes Webpack, Babel, ESLint.

## Installs

### Node.js
Install Node.js at https://nodejs.org/en/download/

### Git
Make sure git is properly installed, following this tutorial: https://github.com/git-guides/install-git\

### Clone the repository
`git clone https://github.com/CappingTeam-Community/Forum.git`

### React
`npm install react react-router-dom`

### Material UI
Material UI is the UI component Library of choice.

`npm install @mui/material @mui/styles @mui/icons-material @emotion/react @emotion/styled cors @types/node dotenv react-icons`

For more info: https://mui.com/


### Server Dependencies 
`npm install express body-parser mysql nodemon cors`

### Database instalation
#### MacOS
   `brew install mariadb`
   `mysql.server start`
   `brew services start mariadb`
   `source ./SQL_files/Community.sql`
   `source ./SQL_files/InsertData.sql`
   
#### Windows
Install: https://dev.mysql.com/downloads/installer/
1. Accept terms
2. Check use Legacy Authentication.
3. password: password
4. Set port to 3306
5. Open "MySQL Client (MariaDB)"
`mysql.server start

New Terminal
`npm run devStart`

log in as root user

`mysql -u root -p`


## Template Generator
react-generate-cli is an npm package to help streamline development. 
It can be used in this way, including our modifications:

`npx generate-react-cli component COMPONENT_NAME`

`npx generate-react-cli component COMPONENT_NAME --type=PAGE/SHARED`

TODO: First time using may require inital setup. ie) typescript, css modules, etc.

It will create a folder named COMPONENT_NAME with a corresponding .jsx and .css module

For more info: For more info: https://www.npmjs.com/package/generate-react-cli

## Development
Advised to have three terminals open:
1. `tsc -watch`
   1. look for file changes, will compile Typescript to Javascript
2. Scripts
   1. Run from the root of project directory
3. Generate templates and Git
   1. use to streamline development

### Git
Clone the Repo (Main Devs)
1. Click green Code button on Github main page
2. Copy the HTTPS url
3. Go to desired directory in terminal
4. `git clone COPIED_URL`
5. Enter Github Username
6. Enter Personal Access Authentication
   7. Account -> Developer Account -> Personal Access Authentication -> Generate New Authentication

### Auth0
1. For Developers: Auth0 credentials make public under .env files. To get access to Auth0 application information, 
email developer at 'blynch1751@gmail.com'
   1. Note: any change to .env files require an `npm start`
2. For Users: 


#### Fixing Issues
1. Make sure NOT to make changes directly on master. Create a new branch, name the branch FIRSTNAME-LASTNAME-ISSUENUMBER
2. In your commit message, include "Fix #ISSUENUMBER" to automatically set the issue to fixed and pending review
3. Only push the branch, allow another developer to review the pull request before merging with master

Fork the Repo (Other Devs)
1.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Database

### The steps taken are slightly different for Mac and Windows Users. 

### Mac Commands:

### To run the database it is suggested to use two terminals. In the first terminal do:

`mysql -u root -p`

enter password 'password' to get access to your database.

`use mysql`

`Source /../forum/sql_files/community.sql`

enter local source path to community.sql

`Source /../forum/sql_files/insertdata.sql`

enter local source path to insertdata.sql

`ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';`

`flush privileges;`

alters privileges to use defalut root@localhost

*Above commands only need to be ran first time*

### In a seperate terminal:

cd to ../forum/

`npm run devStart`

This will keep the database server running, and auto update whenever a new change is made.

### Windows Commands:
Download MySQL, insure to use Legacy Authentication.

Launch MySql command line.

enter password 'password' to get access to your database

enter the exact local source path where the `/../` is displayed
`Source /../forum/sql_files/community.sql`

enter the exact local source path where the `/../` is displayed
`Source /../forum/sql_files/insertdata.sql`

`ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';`

`flush privileges;`

alters privileges to use defalut root@localhost

*Above commands only need to be ran first time*

### In a seperate terminal:
enter the exact local source path where the `/../` is displayed
cd to /../forum/

`npm run devStart`


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


