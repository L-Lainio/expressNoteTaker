# Note Taker (powered by Express.js)
Week-11 Challenge Express.js: Note Taker

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![GITHUB](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Lora Lainio](https://img.shields.io/badge/Lora-Lainio-4baaaa.svg)


## Table of Contents
* [Description](#description)
* [Screenshots](#screenshots)
* [Technologies-Used](#technologies-used)
* [Installation](#installation)
* [Test-Instructions](#test-instructions)
* [License](#license)
* [Contact](#contact)

## Description
In this challenge, you are tasked with creating a Note Taker application using Express.js. The front end of the application has already been developed, and your role is to build the back end, connect it to the front end, and deploy the entire application to Render.

User Story: As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

Acceptance Criteria:

Upon opening the Note Taker, I should see a landing page with a link to a notes page.
Clicking on the notes page link should display existing notes on the left and fields to enter a new note on the right.
Entering a new note title and text should reveal "Save Note" and "Clear Form" buttons at the top.
Clicking "Save" should save the new note, display it with existing notes, and hide the navigation buttons.
Clicking on an existing note should display it on the right and show a "New Note" button in the navigation.
Clicking "New Note" should present empty fields for a new note and hide the button.
Mock-Up: The provided animation demonstrates the appearance and functionality of the web application.

## Live URL of Deployed Application

Deployed on render:

https://express-jsnotetaker.onrender.com

## Screenshots
![](/public/assets/images/Zight%20Recording%202024-5-30%20at%209.30.04%20PM.gif)
![](./public/assets/images/Zight%202024-5-29%20at%2010.17.25%20PM.jpeg)
![](./public/assets/images/Zight%202024-5-29%20at%2010.18.10%20PM.jpeg)
![](./public/assets/images/Zight%202024-5-29%20at%2010.28.59%20PM.jpeg)

## Technologies Used
Express.js: Back end framework for handling HTTP requests.
fs module: Node.js module for file system operations.
HTML: Markup language for creating web pages.
JSON: Data format for storing and exchanging data.
npm packages: Used to manage dependencies and enhance functionality.

## Installation

Clone the starter code repository to your local machine.
Set up the db.json file to store and retrieve notes using the fs module.
Create HTML routes:
GET /notes to return the notes.html file.
GET * to return the index.html file.
Implement API routes:
GET /api/notes to read the db.json file and return all saved notes as JSON.
POST /api/notes to receive a new note, add it to db.json with a unique id, and return the new note to the client.

## Test-Instructions
Start your Express server.
Use a tool like Insomnia or Postman to test the API routes:
Send a GET request to /api/notes to retrieve all saved notes.
Send a POST request to /api/notes with a new note in the request body to save a new note.
Access the HTML routes in your browser:
Navigate to /notes to view the notes.html file.
Navigate to any other route to ensure the index.html file is returned.

## License

NOTICE: This application is covered under the MIT License

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Contact

Have additional questions? Click the links below to reach me through my GitHub account or Email address.

[Link to Github](https://github.com/L-Lainio)

<a href="mailto:lora.lainio.it@gmail.com">lora.lainio.it@gmail.com</a>
