import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static(path.join(__dirname, '../public')));

// Serve index.html by default
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/pages/index.html'));
});

// Example API endpoint
app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from your TypeScript Express server!' });
});

app.get('/about', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/pages/about.html'));
});

app.get('/services', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/pages/services.html'));
});

app.get('/contact', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/pages/contact.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
