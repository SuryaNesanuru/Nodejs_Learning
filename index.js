const express = require('express');
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
});
});
