const db = require("../models")
module.exports = function (app){

    app.get("/api/workouts/", (req,res) =>{
        
        db.Exercise.aggregate([{
            $addFields: { 
                "totalDuration":{
                    $sum:"$exercises.duration"
                }
            }
        }], 
        
        (err,data)=>{
            if(err){
                res.send(error)
            } else{
                console.log(data)
                res.send(data)
            }
        })
    });
    app.post("/api/workouts/", async (req,res) => {
        db.Exercise.create({}, (error,data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data)
            }
        })
    });
    app.put("/api/workouts/:id", (req, res) => {
        db.Exercise.findByIdAndUpdate(
            req.params.id, 
            { 
                $push:{ 
                    workouts: req.body
                }
            },
            (err,data)=>{
                if(err) return err;
                else res.json(data);
            })
    });
    app.get("/api/workouts/range", (req,res) => {
        db.Exercise.aggregate([{
            $addFields: { 
                "totalDuration" : {
                    $sum : "$exercises.duration"
                }
            }
        }], )
        .sort({'day': -1})
        .limit(7)
        .exec((err,data)=>{
            if(err){
                res.send(error)
            } else{
                res.send(data)
            }
        })
    });

}