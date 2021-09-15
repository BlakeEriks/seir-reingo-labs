const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.get("/awesome", (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.get('/:indexOfPlantsArray', (req, res)=>{
  res.send(plants[req.params.indexOfPlantsArray]);
});

app.get('/oops/:indexOfPlantsArray', (req, res) => {
  if (req.params.indexOfPlantsArray == 0){
    res.send(plants[req.params.indexOfPlantsArray]);
  } else {
    res.send('this is the index: ' + req.params.indexOfPlantsArray);
  }
});


app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
});