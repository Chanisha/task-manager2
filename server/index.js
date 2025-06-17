const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let taskList = [
  {
    id: 1,
    title: "First Task",
    description: "Sample task",
    completed: false
  },
];


app.get("/tasks", (req, res) => {
  res.json(taskList);
});


app.post("/tasks", (req, res) => {
  const userTask = req.body;


  const taskToAdd = {
    ...userTask,
    id: Date.now(),
  };

  taskList.push(taskToAdd);
  res.status(201).json(taskToAdd);
});


app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id); 


  taskList = taskList.map((t) => {
    if (t.id === taskId) {
      return {
        ...t,
        ...req.body,
      };
    }
    return t;
  });

  res.json({ message: "Task updated successfully" });
});


app.delete("/tasks/:id", (req, res) => {
  const deleteId = Number(req.params.id);


  taskList = taskList.filter((tsk) => tsk.id !== deleteId);

  res.json({ message: "Task deleted" });
});


app.listen(PORT, () => {
  console.log(`🟢 Server up at http://localhost:${PORT}`);
});
