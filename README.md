# URL Shortener Backend

A simple Node.js backend for shortening URLs using Express and nanoid.

## Features
- Create short URLs (`POST /shorten`)
- Redirect to original URL (`GET /:id`)
- List all shortened URLs (`GET /urls`)

## How to Run
1. Open a terminal in the `url-shortener` directory.
2. Run `npm install` to install dependencies.
3. Start the server:
   ```powershell
   npm start
   ```
4. The API will be available at `http://localhost:3001`.

## Example Request
```
POST /shorten
Content-Type: application/json
{
  "originalUrl": "https://www.example.com"
}
```
