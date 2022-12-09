require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/connect');
const app = express();
db();

const MoneyRoutes = require('./routes/MoneyRoutes');


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Welcome to Money Manager")
});

app.use('/api', MoneyRoutes);


const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
});