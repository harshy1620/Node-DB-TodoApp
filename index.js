// requiring express for making express server
const express = require('express');

// using express as an app
const app = express();

// defining the port number
const port=7000;

// importing the database(mongodb)
const db = require("./config/mongoose");

// importing the model 
const Todo=require("./model/Todo");

// setting up view engine
app.set('view engine', 'ejs');
app.set('views','./views');

// using static file(css)
app.use(express.static('assets'));

// to use encrypted data
app.use(express.urlencoded());

// Reading data from database and showing in UI
app.get('/', function(req, res){
    Todo.find({})
    .then( results => {
        const formattedTasks = results.map(task => {
            const formattedDate = task.due_date.toLocaleString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            return { ...task._doc, due_date: formattedDate };
          });
        return res.render('home',{todoList:formattedTasks});
    })
    .catch(err => {
        console.log('Error in fetching todo!', err)
            return;
    }) 
});


// adding data in backend - POST
app.post('/create-todo',function(req, res){
    Todo.create({ description: req.body.description, category: req.body.category,  due_date: req.body.date})
    .then( result => {
        console.log('Todo added in DB', result);
    })
    .catch(err => {
        console.log('Error in creating a todo!', err)
            return;
    }) 
    return res.redirect('back');
});

// Delete a task
app.get('/delete-task',function(req, res) {
      // get the id from query in the url
    var id = req.query;
    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
              Todo.findByIdAndDelete(Object.keys(id)[i])
      .then( result => {
          console.log('deleted succesfully an object from database', result);
      })
  
      .catch(err => {
          console.log('Error in deleting a task!', err)
              return;
      })
    }
    return res.redirect('back');
});

app.listen(port, function(err){
    if (err){
        console.log('Error listening on port',err);
    }
    console.log('server is up on port ',port);
})