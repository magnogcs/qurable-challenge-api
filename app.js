const express = require('express');
const data = require('./data');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000; 

const app = express();
app.use(cors())

//Get items by query
app.get('/api/items', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const filters = req.query.q;
 
  const filteredItems = data.filter(item => {
     const searchValuesInData = 
        item.name.toLowerCase().includes(filters.toLowerCase()) || 
        item.id.toLowerCase().includes(filters.toLowerCase()) ||
        item.description.toLowerCase().includes(filters.toLowerCase()) 
    return searchValuesInData
    
  });
  res.send({items: filteredItems});
});


//Get items by id
app.get('/api/items/:id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const filters = req.params;
    const filteredItems = data.filter(item => {
       
      let isValid = true;
      for (key in filters) {
        isValid = isValid && item[key] == filters[key];
      }
      return isValid;
    });
    res.send({items: filteredItems});
  });

//Get items by creator
app.get('/api/creators/:creator_id', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const filters = req.params;
    const filteredItems = data.filter(item => {
       
      let isValid = true;
      for (key in filters) {
        isValid = isValid && item.creator[key] == filters[key];
      }
      return isValid;
    });
    res.send({items: filteredItems});
  });
  
  app.listen(port, () => {
    console.log('Server started!');
  });