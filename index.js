import express from "express";
const app = express();
const PORT = 4000;
app.get('/',(res,req)=>{
    console.log('req=>',req);
    res.send('Hello World My First Api Get Request!')
})
// app.listen check karega ke konsi request arahi h.
app.listen(PORT,()=>console.log('Server is Running on PORT '+PORT))
