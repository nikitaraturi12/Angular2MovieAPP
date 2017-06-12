const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4200;

const db = require('./db.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/', router);
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.route('/')
.get((req,res) =>{
  fs.readFile('db.json', 'utf-8', (err, data) => {
    if(err) throw err;
    res.send(data);
  })

})
  .post((req, res) => {
    db.push(req.body);
     console.log(db);
    fs.writeFile('db.json', JSON.stringify(db), (err) => {
      if (err) throw err;
      res.send('The favourite has been saved');
      res.end();
    })
    
  });

router.route('/:id')
  .put((req, res) => {
    // const newBear = req.body.bear;
    const newMovie=req.body;
    console.log(newMovie);
    db.forEach((movie, index) => {
      console.log("inside loop of put");
      console.log(req.params.id);
      console.log(movie.id);
      console.log(movie.id==req.params.id);
    if(movie.id == req.params.id ) {

          console.log("match found");
          db.splice(index, 1,newMovie);
    }

      // if(movie.id === req.params.id) {
      //   console.log("found match");
      //   db.splice(index, 1,newMovie);
      // }
    });
    fs.writeFile('db.json', JSON.stringify(db), (err) => {
      if(err) throw err;
      fs.readFile('db.json','utf-8',(err,data)=>{
      if (err) throw err;
      res.send(data);
    });
  });
  })
  .delete((req, res) => {
    console.log(req.params.id);
    db.forEach((movie, index) => {
      if(movie.id == req.params.id) {
        console.log("found match");
        db.splice(index, 1);        
      }
    });
    fs.writeFile('db.json', JSON.stringify(db), (err) => {
      if (err) throw err;
      fs.readFile('db.json','utf-8',(err,data)=>{
      if (err) throw err;
      res.send(data);
      // res.end();
    });
  });
  
  }) 
  
  

  app.listen(PORT, () => {
  console.log('Example app listening on port ', PORT);
});