# backend-todo-app

## Author: Louis Lassegue

## Setup

- fork github repo
- clone repo in github
- on local machine `git clone repo from github`
- locate file with repo name and `cd`
- npm init -y` install package.json
- `npm install` this will install all the dependencies for backend app
- add an `.env` file for `SECRECT` and `DATABASE_URL`

## Development Process

- Setup an API server to connect with frontend app `todo-app`
  - functionality of the application by connecting to live servers for login, authorization, and data access

### API Server

- GET /todo: Gets a list of all items
- POST /todo: Adds an item
- PUT /todo: Updates an item 
- DELETE /todo/:id: Deletes an item

### Authentication Server

- Registration (/signup)
- Login (/signin)
- Authorization (via Bearer Token)
- ACL (using user roles)

### ToDo Data Model 
- Todo Schema
  - name, assignee, difficulty, completed
- User Schema
  - username, password, role, token, capabilities

## Links

- [Heroku backend link]()
- [Todo-App-Frontend](https://github.com/mrloulass/todo-app)

