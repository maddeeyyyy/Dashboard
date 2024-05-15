const express = require("express");
const cors = require('cors');
const fs = require('fs');
const Data = require("./Data.js")


const app = express();
app.use(cors());
app.use(express.json());


// fs.readFile('jsondata.json', 'utf8', async (err, data) => {
//   if (err) {
//     console.error('Error reading JSON file:', err);
//     return;
//   }
//   const jsonData = JSON.parse(data);
//   try {s
//     const result = await Data.insertMany(jsonData);
//     console.log(`${result.insertedCount} documents inserted`);
//   } catch (error) {
//     console.error('Error inserting data into MongoDB:', error);
//   } 
// });

app.get('/api/data', async (req, res) => {

    try {  
        const allData = await Data.find({});
      res.json(allData);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving data from MongoDB', error: error.message });
    } 
  });


  app.get('/api/data/pie-chart', async (req, res) => {
    try {
        const countries = await Data.find({}, { _id: 0, country: 1 });
        const countryNames = countries.map(data => data.country);

        res.json(countryNames);
          
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving data from MongoDB', error: error.message });
    }
  });

  app.get('/api/bar-chart-data', async (req, res) => {
    try {
        const barChartData = await Data.aggregate([
            { $group: { _id: '$topic', intensity: { $sum: '$intensity' } } },
            { $sort: { _id: 1 } }         ]);

        const topics = barChartData.map(data => data._id);
        const intensity = barChartData.map(data => data.intensity);

        res.json({ topics, intensity });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data from MongoDB', error: error.message });
    }
});

  app.get('/api/pestle-data', async (req, res) => {
        try {
  
      const pestleData = await Data.find({},  { _id: 0, pestle: 1 })
  
   
      res.json(pestleData);
    } catch (error) {

      res.status(500).json({ message: 'Error retrieving pestle data from MongoDB', error: error.message });
    } 
  });


  app.get('/api/regions', async (req, res) => {
    
    try {
      const regions = await Data.find({},  { _id: 0, region: 1 })
      
      res.json(regions);
    } catch (error) {
      // If there's an error, send an error response
      res.status(500).json({ message: 'Error retrieving regions from MongoDB', error: error.message });
    } 
  });

  app.get('/api/sector',  async (req, res) => {  
    try {

      const sectorData = await Data.find({}, { _id: 0, sector: 1 });  
      res.json(sectorData);
    } catch (error) {

      res.status(500).json({ message: 'Error retrieving pestle data from MongoDB', error: error.message });
    } 
  });
  
app.listen(4000);