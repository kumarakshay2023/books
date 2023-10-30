require('dotenv').config();
const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const bookRouter = require('./src/routes/book.route');
const port = process.env.PORT||4040;
const app = express();

require('./src/db/conn');

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/book',bookRouter);

app.listen(port,()=>{
    console.log(`listing to port [${port}]`);
})