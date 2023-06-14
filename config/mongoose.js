// require the  library
const mongoose = require('mongoose');
// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/ToDoApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
// acquire the connection to check if it is successful
const db = mongoose.connection;
// error
db.on('error', console.error.bind(console,'error connecting to db'));
// if it is up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to database');
});
