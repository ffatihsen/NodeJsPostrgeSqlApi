# Simple RESTful API

This project is a basic API application built using Node.js, Express.js, PostgreSQL, and Sequelize ORM. The API supports essential functionalities like user registration and login.

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)

---

## Features

- User registration
- JWT-based authentication
- User profile updates
- Error handling and security measures

## Setup

To run this project on your local environment, follow these steps:

1. Clone this repository:
    ```bash
    git clone https://github.com/username/project_name.git
    ```

2. Navigate to the project directory:
    ```bash
    cd project_name
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Set up your PostgreSQL database and add connection details to the `.env` file.

5. Synchronize the database:
    ```bash
    npx sequelize-cli db:migrate
    ```

6. Start the server:
    ```bash
    npm start
    ```

