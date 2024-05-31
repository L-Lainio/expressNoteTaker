# Note Taker (powered by Express.js)
Week-11 Challenge

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Lora-Lainio-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

 * [Description](#description)

 * [Live-URL-of-Deployed-Application](#live-url-of-deployed-application)

 * [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

 * [Screenshots](#screenshots)

 * [Technologies-Used](#technologies-used)

 * [Installation](#installation)

 * [Credits](#credits)

 * [Features](#features)

 * [Usage-Information](#usage-information)

 * [Contribution-Guidelines](#contribution-guidelines)

 * [Test-Instructions](#test-instructions)

 * [License](#license)

 * [Questions](#questions)

## Description

This project utilizes Express and JavaScript to create a simulated database using a JSON file (db.json) for data storage and retrieval. The objective is to establish the connection between the backend and frontend of the application by implementing GET, POST, and DELETE requests in Express. These requests enable users to save, retrieve, add new data, and delete data through the frontend user interface (UI). Insomnia was employed to test these routes, streamlining the testing process by eliminating the need for a UI and enhancing efficiency during backend development. This tool facilitated the examination of route functionality, data transmission, and deletion without relying on specific HTML and JavaScript files. While working on this project, I gained insight into the fundamental capabilities of Express and its potential in managing extensive databases that interact with APIs for data exchange. Despite encountering some challenges during development, future enhancements for this application would focus on refining routing practices, organizing files into a dedicated routes folder for improved structure, and transitioning to a real database like MySQL for enhanced data management capabilities.

## Live URL of Deployed Application

Deployed on render:

https://express-jsnotetaker.onrender.com

## My GIF
![](/public/assets/images/Zight%20Recording%202024-5-30%20at%209.30.04%20PM.gif)

## My Screenshot
![](./public/assets/images/Zight%202024-5-29%20at%2010.17.25%20PM.jpeg)
![](./public/assets/images/Zight%202024-5-29%20at%2010.18.10%20PM.jpeg)
![](./public/assets/images/Zight%202024-5-29%20at%2010.28.59%20PM.jpeg)

## Technologies Used

This project is powered by Express.js, Node.js (v16.19.1), and JavaScript. It utilizes uuid (node package manager), and file system module (node package manager) as dependencies, and utilized an application called Insomnia to test GET, POST, and DELETE request routes without needing a front end framework built out.

## Installation

1. Clone the repo:
   git clone https://github.com/L-Lainio/express.jsNoteTaker

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

4. Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command npm i to install the dependencies associated with this application (developers may need to install express and uuid directly from the command line, to do so the command for express will be npm i express to install the latests version of Express framework globally so that it can be used within the node terminal, and npm i uuid to install the latest version of uuid).

6. To run the server, within the terminal, type the command npm start or node server.js.

7. Once the server is running, users can then access the front end of the application within the browser to observe full functionality of the site.

## Credits

Much of this application followed outline code found within the week 11 class activities.

## Features

Features of this application include the users ability to retrieve and save notes from/to a mock database.json file which will persist on page load unless deleted.

## Usage Information

This application is powered by Express meaning for it to function properly, there needs to be a server running in the background. To start the server, navigate to the directory of the application, install all dependencies (npm i), then type the command npm start (or node index.js). A message should then display in the command line saying "App listening at http://localhost:3001 🚀". Once the server is running, then navigate to the front end of the application directly from the command line by holding command and clicking the link http://localhost:3001. From there, users can pull up any existing notes saved to the database or create new notes, which once saved will be pushed to the database and persisted.

## Contribution Guidelines

Open to collaboration, if you choose to do so open an issue and modify any changes you would like to see on a feature branch and wait for approval before merging to the main branch.

## Test Instructions

There is currently no unit testing yet written for this application.

## License

NOTICE: This application is covered under the MIT License

## Questions

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/L-Lainio)

<a href="mailto:arollainio@gmail.com">arollainio@gmail.com</a>
