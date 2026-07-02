const express = require("express");

   const router=express.Router();
   router.get("/signup",(req,res)=> res.send("signup endpoint"));
//get signifie que le serveur attend une requête HTTP GET.
//req (request) = les informations envoyées par le client.
// res (response) = ce que le serveur renvoie au client.
router.get("/login",(req,res)=> res.send("logout"));
router .get("/logout",(req,res)=> res.send("login")); 

   module.exports=router;