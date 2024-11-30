    const express = require('express');
    const mysql = require('mysql2');
    const bcrypt = require('bcryptjs');
    const bodyParser = require('body-parser');
    const session = require('express-session');
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
    session({
        secret: 'your-secret-key',
        resave: true,
        saveUninitialized: true,
    })
);

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'all_in_one_calculator',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

// Middleware to redirect logged-in users
function redirectIfLoggedIn(req, res, next) {
    if (req.session.user) {
        return res.redirect('/index.html'); // Redirect to homepage if logged in
    }
    next();
}

// Middleware to ensure authentication for protected routes
function ensureAuthenticated(req, res, next) {
    // if (!req.session.user) {
    //     return res.redirect('/login'); // Redirect to login if not authenticated
    // }
    next();
}

// Register route
app.post('/register', async (req, res) => {
    const { username, email, mobile, password } = req.body;

    db.query(
        'SELECT * FROM users WHERE username = ?',
        [username],
        async (err, results) => {
            if (err) return res.status(500).send('Database error');
            if (results.length > 0) return res.send('Username already registered');

            const hashedPassword = await bcrypt.hash(password, 10);
            db.query(
                'INSERT INTO users (username, email, mobile, password) VALUES (?, ?, ?, ?)',
                [username, email, mobile, hashedPassword],
                (err) => {
                    if (err) return res.status(500).send('Database error');
                    // req.session.user = { username, email };
                    res.redirect('/index.html');
                }
            );
        }
    );
});


// Register route
app.post('/news-letter', async (req, res) => {
    const { email } = req.body;

    db.query(
        'SELECT * FROM news_letters WHERE email = ?',
        [email],
        async (err, results) => {
            if (err) return res.status(500).send('Database error');
            if (results.length > 0) return res.send('Email already registered');
            db.query(
                'INSERT INTO news_letters (email) VALUES (?)',
                [email],
                (err) => {
                    if (err) return res.status(500).send('Database error');
                    req.session.user = { email };
                    res.redirect('/index.html');
                }
            );
        }
    );
});


// Contact route
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    db.query(
        'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
        [name, email, message],
        (err) => {
            if (err) return res.status(500).send('Database error');
            req.session.user = { email };
            res.redirect('/');
        }
    );
});


// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query(
        'SELECT * FROM users WHERE username = ?',
        [username],
        async (err, results) => {
            if (err) return res.status(500).send('Database error');
            if (results.length === 0) return res.send('User not found');

            const user = results[0];
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                req.session.user = user;
                res.redirect('/index.html');
            } else {
                res.send('Incorrect password');
            }
        }
    );
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

// Serve HTML pages with middleware checks
app.get('/login', redirectIfLoggedIn, (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/register', redirectIfLoggedIn, (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.get('/index.html', ensureAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/news-letter', ensureAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/public/news-letter.html');
});


app.get('/contact', ensureAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});




// Financial Calculators Route
app.get('/financial-calculators', ensureAuthenticated, function (req, res) {
    res.sendFile(__dirname + '/public/financial-calculators.html');
});

// Health and Fitness Calculators Route
app.get('/health-fitness-calculators', ensureAuthenticated, function (req, res) {
    res.sendFile(__dirname + '/public/HealthAndFitnessCalculator/index.html');
});

// Conversion Calculators Route
app.get('/conversion-calculators', ensureAuthenticated, function (req, res) {
    res.sendFile(__dirname + '/public/ConversionCalculator/index.html');
});

// Geometry Calculators Route
app.get('/geometry-calculators', ensureAuthenticated, function (req, res) {
    res.sendFile(__dirname + '/public/geometry-calculators.html');
});

// Math and Algebra Calculators Route
app.get('/math-algebra-calculators', ensureAuthenticated, function (req, res) {
    res.sendFile(__dirname + '/public/MathsAndAlzebraCalculator/index.html');
});





// API route for user data
app.get('/api/user', (req, res) => {
    if (!req.session.user) return res.status(401).json({ username: null });
    res.json({ username: req.session.user.username });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
