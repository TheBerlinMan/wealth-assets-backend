import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import 'dotenv/config.js';
import './config/database.js'

const app = express();

const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//middleware
app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('Welcome to the wealth.com Assets API');
});

// error handling
app.use(function (req, res, next) {
    res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({ err: err.message })
})