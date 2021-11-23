const cors = require('cors');
const express = require('express');
const session = require('express-session');
const PGSession = require('connect-pg-simple')(session);

require('dotenv').config();

const Routes = require('./Routes/route');
const authRoutes = require('./Routes/authRoutes');
const pool = require('./database/db');

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 },
		store: new PGSession({
			pool,
			tableName: 'user-sessions',
			createTableIfMissing: true,
		}),
	})
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

// routes
app.use(Routes);
app.use(authRoutes);
