const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const friendSchema = new Schema({
    friendName: {
        type: String,
    },
    mobileNumber: {
        type: Number,
    },
    address: {
        type: String,
    },
    age: {
        type: Number,
    },

});
//we have to perform CRUD Operation
const FriendModel = mongoose.model("FriendModel", friendSchema);
module.exports = { FriendModel };