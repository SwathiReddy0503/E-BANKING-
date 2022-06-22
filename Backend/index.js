const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');

const account=require('./routes/account.js');
const customer=require('./routes/customer.js')


const app = express();
app.use(bodyparser.json());

app.listen(3000, ()=>console.log('server started at port: 3000'));
app.use('/account',account);
app.use('/customer',customer)