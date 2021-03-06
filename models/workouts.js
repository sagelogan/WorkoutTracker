const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExerciseSchema = new Schema({
    day:{
        type:Date,
        default:Date.now,
    },
    exercises:[{
        type:{
            type:String,
            trim:true,
            required:"THE TYPE OF EXERCISE IS REQUIRED"
        },
        name:{
            type:String,
            trim:true,
            required:"THE EXERCISE NAME IS REQUIRED"
        },
        weight:{
            type:Number,
        },
        sets:{
            type:Number,
        },
        reps:{
            type:Number,
        },
        duration:{
            type:Number,
            required:"THE EXERCISE DURATION IS REQUIRED"
        },
        distance:{
            type:Number, 
        }
    }]
})
const Exercise = mongoose.model("Exercise",ExerciseSchema);
module.exports = Exercise;