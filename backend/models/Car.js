const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
    license: {
        type: String
    },
    make: {
        type: String
    },
    model: {
        type: String
    },
    note: {
        type: String
    },
}, {
    collection: "cars"
})

module.exports = mongoose.model('Car', carSchema);