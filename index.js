const express = require("express");
const app = express();
const port = 3008;

app.use(express.json());

let department = [
  { id: 1, name: "IT" },
  { id: 2, name: "DBT" },
];

app.get("/", (req, res) => {
  res.send("Mr.Puri Nangnoi");
});

app.get("/department", (req, res) => {
  res.send(department);
});

app.post("/department", (req, res) => {
  let newdepartment = {
    id: department.length + 1,
    name: req.body.name,
  };
  department.push(newdepartment);
  res.send(newdepartment);
});

app.listen(port, () => {
  console.log("Server Starting on port");
});
