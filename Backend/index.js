const express=require('express');
const { default: mongoose } = require('mongoose');
const listRoute=require('./route/listRoute')
const app=express();
app.use(express.json());
app.listen(5000,()=>console.log('connected to host 5000'))

//connecting mongodb

mongoose.connect('mongodb://127.0.0.1:27017/todo')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.use('/api/list',listRoute);