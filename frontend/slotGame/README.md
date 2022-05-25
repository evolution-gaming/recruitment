# NetEnt - Game Developer Test 

# Prerequisites

- Install [npm](https://www.npmjs.com/) version >16.9.1

# Getting Started

- Install dependencies

```
npm install
```

- Build and run the project

```
npm run build
npm start
```

Navigate to `http://localhost:3000`

# Task
The task is to write a small application, which you will then share with us for code review, a practice that is heavily utilized in NetEnt.
The general principles by which the application will be evaluated are readability, reusability and maintainability. 
Your task is to build a small slot game based on the existing basic setup found in `public` and `src`.

## Specifications
The application has the follow requirements
* TypeScript
* Server should be a Node.js App
* React, Angular or similar is not allowed. Express is allowed

### Client
* Perform an outcome request to the server
* Display the result returned by the server using the provided graphical resources
* Display the Win type
* Support the Bonus feature

### Server
* Receive request from client and return a randomized outcome
* The outcome should be three random integers between 0-5
* Support Bonus feature

### Win type
* Three types of win types: No Win, Small Win and Big Win
* Two equal integers constitute a Small Win
* Three equal integers constitute a Big Win
* Any other outcome constitutes a No Win

### Bonus feature
* The Bonus rewards the player with a free request
* The server should randomly return whether the feature is triggered or not along with the regular response
* The client should present the regular result returned, then if the feature is triggered, perform a new request without any user input

## Submission process

Please publish the solution in a private [GitHub](https://github.com/) repository and give the user
[@evo-home-task](https://github.com/evo-home-task) access to the repository.

Please including a concise `ReadMe.md` file with the following:
* Known limitations of your solution
* Key design decisions made, especially if you considered multiple options
* How to launch the solution.

We do not require the documentation to be verbose or lengthy - short descriptions are acceptable, and details
can be discussed on the interview.

If anything in the task description is unclear, or you encounter any problems, please do not hesitate to ask.
