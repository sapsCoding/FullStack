import express from "express";

const app = express();
const port = 4000;

const userData = [
  {
    id: 1,
    name: "Abdul Ahad",
    age: 20,
    class: 13,
  },
  {
    id: 2,
    name: "Abdul Vasay",
    age: 18,
    class: 12,
  },
  {
    id: 3,
    name: "Areej Muqaddas",
    age: 16,
    class: 13,
  },
  {
    id: 4,
    name: "Sadaf Muqaddas",
    age: 15,
    class: 9,
  },
  {
    id: 5,
    name: "Saba Noor",
    age: 12,
    class: 7,
  },
  {
    id: 6,
    name: "Muhammad Maqbool",
    age: 50,
    class: 18,
  },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/user-data", (req, res) => {
  res.json(userData);
});

app.listen(port, () => {
  console.log("Server Running On This Port " + port);
});
