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
2. Run `npm install` to install dependencies.
3. Start the server:
   ```powershell
   npm start
   ```
4. The API will be available at `http://localhost:3000`.

## Example Request
```
POST /todos
Content-Type: application/json
{
  "title": "Buy groceries"
}
```
