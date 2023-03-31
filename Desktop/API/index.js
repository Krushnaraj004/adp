// 1> var dal = require("./cal")
// dal();

// 2> var dal = require("./cal")
// console.log(dal)

//3>
//var { x, cal } = require("./cal")
// var dal = require("./cal")
// console.log(dal)
// console.log(dal.cal())

//4> calculator
// var dal = require("./cal")
// dal();

// var isEven = require('is-even');

// var x = isEven(17);

// console.log("x", x);

//Build a Server http is inbuild obj -----------------------------------

// const http = require("http");
// http.createServer((request, response) => {
//     console.log("hello Guys");
// }).listen(8080);

// GET METHOD-------------------------------
// const http = require("http");
// http.createServer((request, response) => {
//     console.log("request",request.url,request.method);
// }).listen(8080);

//Build a Server Method - GET POST PUT and DELETE--------------------
// const http = require("http");
// http.createServer((request, response) => {
//     if (request.method === "GET" && request.url === "") {
//         console.log("Getting Friends");
//     } else if (request.method === "POST" && request.url === "/add/friends") {
//         console.log("adding Friends");
//     } else if (request.method === "PUT" && request.url === "/update/friends") {
//         console.log("updating Friends");
//     } else if (request.method === "DELETE" && request.url === "/delete/friends") {
//         console.log("Deleting Friends");
//     } else {
//         console.log("Not from Above");
//     }
// }).listen(8080);

//inhertance call

// function outer() {
//     var x = 5;
//     return function inner(yn) {
//         console.log("your name", x + yn);
//     }
// }
// let myfun = outer;
// myfun()(10)

//Create server through Express

const express = require("express");
const mongoose = require('mongoose');
const app = express();
const { FriendModel } = require("./friend.model");
//filename

const dummyData = [{
    id: "1",
    name: "batman",
}, {
    id: "2",
    name: "superman",
}, {
    id: "3",
    name: "Hero",
}];

//connecting to mongodb
mongoose.connect('mongodb+srv://Krushnaraj004:BANNA@44@cluster0.dqlkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then((data) => console.log("connect to database"))
    .catch((err) => console.log("err occured while connecting"));

//parsing body
app.use(express.json());

//calculate

// app.post("/add/friend", (req, res) => {
//             const data = req.body;

//             const friend = new FriendModel({
//                 friendName: data.friendName,
//                 mobileNumber: data.mobileNumber,
//                 address: data.address,
//                 age: data.age,

//             });
//             friend.save().then((data) => {
//                 console.log("data", data);
//                 res.send(data);
//             }).catch((err) => {
//                 console.log("err", err);
//                 res.send("unable to send");
//             });
            //saving Data to DB
            app.post("/add/friend", (req, res) => {
                const data = req.body;

                const friend = new FriendModel({
                    friendName: data.friendName,
                    mobileNumber: data.mobileNumber,
                    address: data.address,
                    age: data.age,
                });
                friend.save().then((data) => {
                    console.log("data", data);
                    res.send(data);
                }).catch((err) => {
                    console.log("err", err);
                    res.send("unable to send");
                });
                // friend.save().then((data) => {
                //     if (!(data.friendName || data.address || data.mobileNumber || data.age)) {
                //         res.send(" Enter values");
                //         // console.log("data", data);
                //     } else {
                //         res.send("Uncorrect");
                //         // console.log("err", err);
                //     }
                //})
            });

            //getting a document by id

            // app.get("/get/friendById", (req, res) => {
            //     const _id = req.query._id;
            //     // console.log("req.query", req.query);
            //     if (_id) {
            //         console.log("inside then");
            //         FriendModel.findOne({ _id: _id }).then((data) => {
            //             if (!data) {
            //                 res.send("couldn't find user");
            //             } else {
            //                 res.send(data);
            //             }
            //         }).catch((err) => {
            //             console.log("err", err);
            //             res.send("something wrong");
            //         });
            //         //console.log("friend", friend);
            //     } else {
            //         res.send("Invalid Id");
            //     }
            // });

            // //fetch all docs inside a collection

            // app.get("/get/documents", (req, res) => {
            //     FriendModel.find().then((data) => {
            //         //console.log("data", data);
            //         res.status(200).send(data);
            //     }).catch((err) => {
            //         console.log("err", err);
            //         res.status(500).send("something went wrong,please try again later");
            //     })
            // });

            // get by ida  
            app.get("/find/document",(req,res)=>{
                FriendModel.find().then((data)=>{
                    if(data==null || data === undefined || data=== '' || data.length ===0)
                    {
                        res.send("no data");
                    }
                    else{
                        res.status(200).send(data);
                    }
                }).catch((error)=>{
                    res.status(500).send("Incorrect");
                });
            })

            //delete object through id

            app.delete("/delete/documentById", (req, res) => {
                const _id = req.query._id;
                FriendModel.findByIdAndDelete({ _id: _id }).then((data) => {
                    res.status(200).send("Deleted Successfully");
                }).catch(err => {
                    console.log("err", err);
                    res.status(500).send("something went wrong ,Please try again later!");
                })
            });

            //Update object through id

            app.put("update/documentById", (req, res) => {
                const _id = req.query._id;
                const data = req.body;

                console.log("data", data);
                FriendModel.findByIdAndUpdate({ _id: _id }, { $set: { friendName: data.friendName } }, { new: true })
                    .then((data) => {
                        res.status(200).send("data", data);
                    }).catch(err => {
                        console.log("err", err);
                        res.status(500).send("something went wrong ,Please try again later!");
                    })
            });

             app.listen(8080, function() {
                    console.log("server is up on port 8080");
                });

            //     get post put delete
            //     app.get("/:msg/getting/:msg", function(request, response) {
            //         console.log("params", request.params);
            //         response.send("hello World");
            //     });
            //     app.get("/get/friend", function(request, response) {
            //         console.log("query", request.query);
            //         response.send(request.query);
            //     });
            //     app.get("/get/friends", function(request, response) {
            //         console.log(dummyData);
            //     });
            //     app.post("/add/friends", (request, response) => {
            //                 console.log("body", request.body);
            //                 dummyData.push(request.body);
            //                 response.send(dummyData);});