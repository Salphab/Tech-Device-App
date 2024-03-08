const express = require('express');
const cors = require('cors');
const app = express();
const port = 4001;
const Router = require('./routers/Categoryrouter');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//29-1-2024
//create express route for all category pages. Status: completed
//add params to category addresses. status: completed
//write dynamic axios snippet for request. status:completed
 

app.use('/', Router);

app.listen(port,()=>console.log(`you are listening on ${port}`))