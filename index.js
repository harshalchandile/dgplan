
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://db_user:1b0oqzRrbbZrziDC@dailyget.9id5p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});


const users = require('../controllers/user-api');
const transactions = require('../controllers/transaction-api');

let numb = 0;
while(1){
numb+=1;
users.getUsers(numb);
transactions.getTransactions(numb);
