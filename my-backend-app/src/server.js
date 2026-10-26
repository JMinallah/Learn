import express from 'express';

const PORT = 8080;
const app = express();

// Define a route for the root URL 
app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
});

// profile
app.get('/profile', (req, res) => {
    res.status(200).send('This is the profile page.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
