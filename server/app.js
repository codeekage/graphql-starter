const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose')
const cors = require('cors');


const app = express();

app.use(cors());

mongoose.connect('mongodb://codeekage:test123@ds161391.mlab.com:61391/gql-starter')
mongoose.connection.once('open', () => {
  console.log('database running!');
  
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
  console.log('now listeing');
})
