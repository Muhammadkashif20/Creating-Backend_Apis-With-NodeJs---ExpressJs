import express from "express";
import morgan from "morgan";
// mock data:-
const tasks = [
  {
    id: 1,
    task: "why?",
  },
  {
    id: 2,
    task: "what is this?",
  },
  {
    id: 3,
    task: "hello world?",
  },
];
const app = express();
const PORT = 4000;
//app.use(morgan('tiny')) Middleware ka use logging ke lye hota h!
app.use(morgan('tiny'))
// Application-Level MiddleWare : ye wo hote jo lazmi har jaga chalte h.
// Router-Level MiddleWare : ye wo hote jo chalte h lekin hm isko specific jaga bhi sirf use krsakte h.iski example line 34 pr h.
 const MiddleWare=(req,res,next)=>{
    console.log("request=>",req.requestBy="Muhammad Kashif");
    // res.status(400).send("Few Error For Your System So Check This!")
    // console.log("MiddleWare=>",new Date());
    next()
 }
//  app.use(MiddleWare)

// app.use(express.json()) Middleware ka use json format ko parse me convert krna h. 
app.use(express.json())
app.get("/", MiddleWare,(req, res) => {
    console.log(req.requestBy);
  res.status(200).send(tasks);
});
app.post("/", (req, res) => {
  res.send("Hello World My Second Api Post Request!");
});
app.put('/',(req,res)=>{
    console.log("req body=>",req.body);
    
    res.send('Hello World My Third Api Put Request!')
})
app.delete("/", (req, res) => {
  res.send("Hello World My Fourth Api Delete Request!");
});
// app.listen check karega ke konsi request arahi h.
app.listen(PORT, () => console.log("Server is Running on PORT ", PORT));
