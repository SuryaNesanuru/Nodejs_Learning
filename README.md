<<<<<<< HEAD
# URL Shortener Backend

A simple Node.js backend for shortening URLs using Express and nanoid.

## Features
- Create short URLs (`POST /shorten`)
- Redirect to original URL (`GET /:id`)
- List all shortened URLs (`GET /urls`)

## How to Run
1. Open a terminal in the `url-shortener` directory.
=======
# To-Do List RESTful API

This is a simple Node.js RESTful API for managing a to-do list. It uses Express.js and stores data in-memory.

## Features
- Create, read, update, and delete to-do items
- Endpoints:
  - `GET /todos` - List all todos
  - `GET /todos/:id` - Get a todo by ID
  - `POST /todos` - Create a new todo (JSON: `{ "title": "..." }`)
  - `PUT /todos/:id` - Update a todo (JSON: `{ "title": "...", "completed": true/false }`)
  - `DELETE /todos/:id` - Delete a todo

## How to Run
1. Open a terminal in the `todo-api` directory.
>>>>>>> 69840578d2bece747f560b405d20e09b139ddeb8
2. Run `npm install` to install dependencies.
3. Start the server:
   ```powershell
   npm start
   ```
<<<<<<< HEAD
4. The API will be available at `http://localhost:3001`.

## Example Request
```
POST /shorten
Content-Type: application/json
{
  "originalUrl": "https://www.example.com"
=======
4. The API will be available at `http://localhost:3000`.

## Example Request
```
POST /todos
Content-Type: application/json
{
  "title": "Buy groceries"
>>>>>>> 69840578d2bece747f560b405d20e09b139ddeb8
}
```
