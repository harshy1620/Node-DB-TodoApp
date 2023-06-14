# Node-DB-TodoApp
Todo App ( Node + MongoDB)
# Todo App

This GitHub repository contains the source code for a Todo app, developed using Node.js, Express.js, MongoDB, and EJS. The app provides a feature-rich task management system, allowing users to create, edit, and delete tasks with ease.

## Project Overview

The Todo app is a web application built using Node.js and Express.js for the backend, MongoDB for data storage, and EJS as the templating engine for rendering dynamic content. It provides a user-friendly interface to manage tasks, including the ability to set task types and due dates.

## Features

The Todo app offers the following features:

1. **Task Creation**: Users can easily create new tasks by entering a task description, selecting a task type (personal, school, others), and setting a due date. The app stores the task details in the database and displays them in the task list.

2. **Task Editing**: Users can edit task details, such as the description, task type, and due date, for existing tasks. The app updates the task information in the database and reflects the changes in the task list.

3. **Task Deletion**: Users can remove a task from the list by clicking on a delete button associated with each task. The app deletes the task from the database, ensuring it is no longer displayed in the task list.

4. **Task Completion**: Users can mark a task as completed by checking a checkbox associated with the task. The app visually indicates completed tasks, providing a clear distinction from pending tasks.

5. **Task Filtering**: The app allows users to filter tasks based on their type (personal, school, others) or completion status. Users can easily switch between different views to focus on specific task categories or see only pending or completed tasks.

## Getting Started

To run the Todo app on your local machine, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```
   git clone https://github.com/harshy1620/Node-DB-TodoApp.git
   ```

2. Navigate to the project directory using the command line.

3. Install the project dependencies by running the following command:

   ```
   npm install
   ```

4. Configure the MongoDB connection by providing the appropriate credentials and connection details in the `config.js` file.

5. Start the application by running the following command:

   ```
   npm start
   ```

6. Open a web browser and navigate to `http://localhost:7000` to access the Todo app.

7. Interact with the app by creating tasks, editing task details, marking tasks as completed, and deleting tasks.

## Dependencies

The Todo app relies on the following dependencies:

- Node.js: A JavaScript runtime environment for executing server-side code.
- Express.js: A web application framework for Node.js, used to handle HTTP requests and routing.
- MongoDB: A NoSQL database used to store and retrieve task data.
- EJS: A template engine for generating dynamic HTML content.

Ensure you have Node.js and MongoDB installed on your local machine before running the app.

## Contributions

Contributions to this project are welcome. If you would like to enhance the app or fix any issues, feel free to create pull requests or raise issues in the GitHub repository.

## Acknowledgments

This project was created to demonstrate a robust task management system using Node.js, Express.js, MongoDB, and EJS. Special thanks to the developers and contributors of the various open-source libraries and frameworks used in this project.

## Contact

If you have any questions, suggestions, or feedback, please feel free to contact the project maintainer at harshyadav6642@gmail.com
