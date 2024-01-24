import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    toDoList:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo'
        }    
    ],
    complete: {
        type: Boolean,
        default: false
    }

},{timestamps: true})

export const ToDo = mongoose.model("ToDo", todoSchema)