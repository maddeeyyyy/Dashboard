const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const uri = 'mongodb+srv://madhursirohi2:Madhur123@cluster0.x6llmc3.mongodb.net/black?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect('mongodb+srv://madhursirohi2:Madhur123@cluster0.x6llmc3.mongodb.net/black?retryWrites=true&w=majority&appName=Cluster0');

const DataSchema = new Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});


const dbName = 'black';
const collectionName = 'graph';

mongoose.connect('mongodb+srv://madhursirohi2:Madhur123@cluster0.x6llmc3.mongodb.net/black?retryWrites=true&w=majority&appName=Cluster0');

// Create a model using the schema
const Data = mongoose.model('Data', DataSchema, collectionName);

module.exports = Data;
