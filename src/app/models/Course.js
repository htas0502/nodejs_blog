const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String, maxLenth: 255, required: true },
    description: { type: String, maxLenth: 600 },
    image: { type: String, maxLenth: 255 },
    videoId: { type: String, maxLenth: 255 },
    level: { type: String, maxLenth: 255 },
    slug: { type: String, slug: 'name', unique: true },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
}, {timestamps: true});

module.exports = mongoose.model('Course', Course);
