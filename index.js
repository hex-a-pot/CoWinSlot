import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes.js'
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use('/',routes);
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
const CONNECTION_URL = "mongodb+srv://hex-a-pot:sudhansu204me@cluster0.rjemq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology : true})
.then(()=> app.listen(PORT,()=>console.log('SERVER RUNNING ON PORT : ' + PORT)))
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify',false);