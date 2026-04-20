const Task = require("../models/Task");

// GET all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// CREATE task
const createTask = async (req, res) => {
  const { title, description } = req.body;

  const newTask = new Task({ title, description });
  await newTask.save();

  res.json(newTask);
};

// UPDATE task
const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedTask);
};

// DELETE task
const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};