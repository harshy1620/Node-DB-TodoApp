const mongoose=require('mongoose'); 

const toDoListSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    due_date:{
        type: Date,
        required:true,
    }
});

const Todo=mongoose.model('Todo',toDoListSchema);
module.exports=Todo;
