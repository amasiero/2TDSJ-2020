const restful = require('node-restful');
const mongoose = restful.mongoose;

const messageSchema = new mongoose.Schema({
    type: { type: String, require: true },
    text: { type: String },
    uri:  { type: String },
    coordinate: {
        latitude: { type: Number },
        longitude: { type: Number }
    }
});

module.exports = restful.model('Message', messageSchema);