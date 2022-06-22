import express from 'express';

const app = express(); //creates a new express application
const port = 3000;

app.get('/', function(req, res)
//app.get('/', (req, res) => // '/' means default route for my application
{
  res.send('Hello, World!');
});

//listener - similar to server.listen
app.listen(port, function()
//app.listen(port, () => 
{
  console.log(`Example app listening on port ${port}`);
});

