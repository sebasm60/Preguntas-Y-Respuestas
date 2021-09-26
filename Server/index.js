const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.set('port', 5000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/routes'));

app.listen(app.get('port'), () => {
    console.log(`Start on port ${app.get('port')}`);
});