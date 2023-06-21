// const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);
// mongoose
//     .connect(
//         "mongodb+srv://subhradipsamanta99:Gub8i1nn57NEWChA@cluster0.hqlelpi.mongodb.net/", {
//             // useCreateIndex: true,
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         }
//     )
//     .then(() => {
//         console.log("connection is successfully");
//     })
//     .catch((e) => {
//         console.log("No Connection");
//     });


const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://subhradipsamanta99:Gub8i1nn57NEWChA@cluster0.hqlelpi.mongodb.net/");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to Database!'));

db.once('open', function() {
  console.log("Successfully Connected to Database :: MongoDB");
});

module.exports = db;