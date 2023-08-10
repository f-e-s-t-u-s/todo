// ! app configuration
const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const port = 3000;
const listSchema = require("./schemas/listSchema");
const connect = require("./db");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// ! connection to db and server

connect();
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// ! app routes
app.get("/api/v1/get-all-tasks", async (req, res) => {
  const getAlltasks = await listSchema.find()
  return res.json(getAlltasks)
  
});

app.post("/api/v1/add-to-list", async (req, res) => {
  console.log(req.body.item);
  const item = req.body.item;
  const status = req.body.status;

  const values = {
    status: status,
    taskName: item,
  };

  const addTasks = await listSchema.create(values);

  if (!addTasks) {
    return res.json("Error");
  }
  return res.json("added task");

});

app.post("/api/v1/:id/remove-from-list/", async (req, res) => {

   const id = `ObjectId(${req.params})`
  // const removeTask = listSchema.findByIdAndUpdate(req.params, {
  //   $set: { status: "completed"}
  // })
  const removeTask = listSchema.updateOne( {_id: id}, {$set: {status : "done"}} )

  if(!removeTask){
    return res.json("failed to remove task")
  }
  return res.json("task removed")

});

// ! end of routes
