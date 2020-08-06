Quiz Game is an interactive game built for the ReactJS course at SoftUni.

The game has two levels of access: guest user and registered user.
The Guest user has access to the /About, /Rules, /Login and /Register pages.
The registered user can access additionaly the /Home, /Profile, /Add Question and /Edit Question pages.

Upon registration and log in, a registered user can select between four categories of questions - Biology, History, Geography and Science.
Each category contains subquestions pertaining to it. Each question has four possible answers, with only one correct. 
If a registered user answers a question correctly, he adds one point to his score, if not the score for his wrong answers increases with one.
A registered user wins the game upon 3 correct answers and loses it by giving 3 wrong answers.

A registered user can check his score in the /Profile page. He can additionally create new quesition or edit questions in the /Create Question and /Edit Question pages.

The application is built entirely on React.js (client side) and node.js/MongoDB (server side). 

## REST API and DB

The repository of Quiz Game REST API is available at: https://github.com/akangelov/React.js-Project/tree/master/rest. An open connection to MongoDB is required.

## Resolve Dependencies

When the project is cloned or downloaded, type in the terminal the following in both Server and Client directory:

`npm / yarn install`

## Run the web server
To run the web server type in terminal from Server-Celera-Chemie the following:

`nodemon index`

## Run the React app
The app uses React on client side. To run the React app type in terminal from Quiz Game directory the following:

`npm / yarn start`

By default, the app is running on:

localhost:3000
