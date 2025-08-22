const express = require('express');
<<<<<<< HEAD
const { nanoid } = require('nanoid');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// In-memory store for URLs
const urls = {};

// Root route
app.get('/', (req, res) => {
  res.send('URL Shortener API is running. Use /shorten to create short URLs.');
});

// Create a short URL
app.post('/shorten', (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl || typeof originalUrl !== 'string') {
    return res.status(400).json({ error: 'originalUrl is required and must be a string.' });
  }
  const id = nanoid(7);
  urls[id] = originalUrl;
  res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${id}`, id, originalUrl });
});

// Redirect to original URL
app.get('/:id', (req, res) => {
  const originalUrl = urls[req.params.id];
  if (!originalUrl) {
    return res.status(404).send('Short URL not found');
  }
  res.redirect(originalUrl);
});

// Get all shortened URLs
app.get('/urls', (req, res) => {
  const list = Object.entries(urls).map(([id, originalUrl]) => ({ id, originalUrl }));
  res.json(list);
});

app.listen(PORT, () => {
  console.log(`URL Shortener server running on http://localhost:${PORT}`);
=======
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let todos = [];
let idCounter = 1;

// Root route
app.get('/', (req, res) => {
  res.send('To-Do List API is running. Use /todos endpoint.');
});

// Get all todos
// Get all todos with optional filters
app.get('/todos', (req, res) => {
  let result = [...todos];
  // Filter by completion status
  if (req.query.completed) {
    const completed = req.query.completed === 'true';
    result = result.filter(t => t.completed === completed);
  }
  // Search by title
  if (req.query.search) {

    const search = req.query.search.toLowerCase();
  app.post('/todos/complete-all', (req, res) => {
    todos.forEach(t => t.completed = true);
    res.json({ message: 'All todos marked as completed.' });
  });

  // Clear all completed todos
  app.delete('/todos/clear-completed', (req, res) => {
    const before = todos.length;
    todos = todos.filter(t => !t.completed);
    const removed = before - todos.length;
    res.json({ message: `${removed} completed todos removed.` });
  });
    result = result.filter(t => t.title.toLowerCase().includes(search));
  }
  res.json(result);
});

// Get a single todo by id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// Create a new todo
app.post('/todos', (req, res) => {
  const { title, dueDate } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const todo = { id: idCounter++, title, completed: false, dueDate: dueDate || null };
  todos.push(todo);
  res.status(201).json(todo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  const { title, completed, dueDate } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  if (dueDate !== undefined) todo.dueDate = dueDate;
  res.json(todo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Todo not found' });
  todos.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
>>>>>>> 69840578d2bece747f560b405d20e09b139ddeb8
});
