const express =require('express');
const dotenv=require ('dotenv');
const authRoutes = require('./routes/auth.route.js');
const messageRoutes = require('./routes/message.route.js');     
dotenv.config();

//utilisation du librarie express
const app= express();
const PORT=process.env.PORT|| 3000; ;
const MONGO_URI=process.env.MONGO_URI;
console.log(PORT) 
app.use("/api/auth",authRoutes);
app.use("/api/message", messageRoutes )
app.listen(PORT, () =>console.log("server is running baby "+ PORT));