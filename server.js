import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
app.use(express.static(join(__dirname, 'dist'))); // For production build
app.use(express.static(join(__dirname, 'public'))); // For dev/static assets

// Middleware to parse urlencoded body (form data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle Contact Form
app.post('/api/contact', (req, res) => {
  console.log('Contact Form Received:', req.body);
  // Log logic or email sending would go here
  res.status(200).send('Message received');
});

// Fallback to index.html for SPA routing (if needed in future)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
