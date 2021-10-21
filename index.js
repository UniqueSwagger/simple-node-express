const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send(
    "WOW I am exited to learn node and express with nodemon automatic restart"
  );
});
const users = [
  { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: "017888888" },
  { id: 1, name: "Shabnur", email: "shabnur@gmail.com", phone: "1099102891" },
  {
    id: 2,
    name: "Suchorita",
    email: "suchorita@gmail.com",
    phone: "017888888",
  },
  { id: 3, name: "Sonia", email: "sonia@gmail.com", phone: "8764264723" },
  { id: 4, name: "Susmita", email: "susmita@gmail.com", phone: "37627612" },
  { id: 5, name: "Monumita", email: "monumita@gmail.com", phone: "27367236" },
];
app.get("/users", (req, res) => {
  const search = req.query.search;
  //use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id]; //this is index actually like users er 0 index
  res.send(user);
});
app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana", "apple"]);
});
app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("yummy yummy tok marka fazli");
});
//app method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  // res.send(JSON.stringify(newUser))
  res.json(newUser);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
