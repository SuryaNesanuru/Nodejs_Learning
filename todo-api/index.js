const express = require('express');
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
});
