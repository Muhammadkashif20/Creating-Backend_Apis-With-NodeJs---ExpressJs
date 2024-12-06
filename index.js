import express from "express";
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

// Application-Level MiddleWare:

app.get("/", (req, res) => {
  res.status(200).send(tasks);
});
app.post("/", (req, res) => {
  res.send("Hello World My Second Api Post Request!");
});
app.put('/',(req,res)=>{
    res.send('Hello World My Third Api Put Request!')
})
app.delete("/", (req, res) => {
  res.send("Hello World My Fourth Api Delete Request!");
});
// app.listen check karega ke konsi request arahi h.
app.listen(PORT, () => console.log("Server is Running on PORT ", PORT));
