const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({
    title: {type: 'string', required: true, unique: true},
    desc: {type: 'string'},
    img: {type: 'string'},
    imgTitle: {type: 'string'},
    imgSM: {type: 'string'},
    trailer: {type: 'string'},
    video: {type: 'string'},
    limit: {type: 'string'},
    year: {type: 'string'},
    genre: {type: 'string'},
    isSeries: {type: 'boolean', default: false},
},
{timestamps: true}
);

module.exports = mongoose.model('Movie', MovieSchema);