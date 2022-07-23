require('dotenv').config();
const express = require('express');
const app = express();
const pug = require('pug');

const PORT = process.env.PORT && 3000;

app.use("/public/css", express.static(`${__dirname}/public/css`));
app.use("/public/script", express.static(`${__dirname}/public/script`));

app.get('/',function(req,res){
  res.sendFile(`${__dirname}/src/views/index.html`);
});

app.listen(PORT, ()=>{
  console.log(`listen at http://localhost:${PORT}`);
});