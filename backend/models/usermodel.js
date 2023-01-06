const mongoose = require("mongoose");

// {
//     "user" : "Amitabh",
//     "DOB" : 11 October 1942,
//     "lastacessIP" : 160.202.159.203,
//     "fullname" : "Amitabh Bachchan",
//     "mother_name" : "Teji Bachchan",
//     "products": [
//         "MacBook",
//         "iWatch",
//         "iPhone",
//         "iPAD",
//         "Headphone"
//     ]
//     "hobbies" : [
//         "A",
//         "B",
//         "C",
//         "D",
//         "E"
//     ],
//     "state" : [
//         "Maharashtra"
//     ],
//     "city" : [
//         "Mumbai"
//     ],
//     "Postal code" : [
//         "400049"
//     ]
// }


const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    mother_name: {
        type: String,
        required: true
    },
    products: {
        type: String,
        required: true
    },
    hobbies: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
    ,city: {
        type: String,
        required: true
    }
    ,Postal_code: {
        type: String,
        required: true
    }

});

const users = new mongoose.model("users",userSchema);


module.exports = users;