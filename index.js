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

app.get("/department/:id", (req, res) => {
  let id = req.params.id;
  let findD = department.findIndex((e) => e.id == id);
  if (findD == -1) res.send("ไม่พบข้อมูล");
  res.send(department[findD]);
});

app.post("/department", (req, res) => {
  let newdepartment = {
    id: department.length + 1,
    name: req.body.name,
  };
  department.push(newdepartment);
  res.send(newdepartment);
});

app.put("/department/:id", (req, res) => {
  let id = req.params.id;
  let findD = department.findIndex((e) => e.id == id);
  if (findD == -1) res.send("ไม่พบข้อมูล");
  let deleteD= department.splice(findD, 1);
  res.send(deleteD);
});

app.listen(port, () => {
  console.log("Server Starting on port");
});
