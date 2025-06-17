"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });


  const loadTasks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/tasks");
      setTasks(response.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  };

  // Save new task
  const handleAddTask = async () => {
    if (!formState.title.trim()) {
      return;
    }

    try {
      await axios.post("http://localhost:4000/tasks", formState);
      setFormState({ title: "", description: "" }); // reset input
      loadTasks();
    } catch (err) {
      console.log("Error while adding a task", err);
    }
  };


  const handleToggleComplete = async (taskId, prevState) => {
    try {

      await axios.put(`http://localhost:4000/tasks/${taskId}`, {
        completed: !prevState,
      });
      loadTasks();
    } catch (error) {
      console.warn("Couldn't update task", error);
    }
  };


  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:4000/tasks/${taskId}`);
      loadTasks(); // probably could just filter locally but this is simpler
    } catch (e) {
      console.error("Error deleting task", e);
    }
  };


  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📝 Mini Task Manager</h1>

      {/* New Task Form */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-1/2"
          value={formState.title}
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 w-1/2"
          value={formState.description}
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
        />
        <button className="bg-blue-500 text-white px-4" onClick={handleAddTask}>
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-400 italic">No tasks yet. Start by adding one!</p>
        ) : (
          tasks.map((item) => (
            <li
              key={item.id}
              className="p-4 border rounded flex justify-between items-center"
            >
              <div>
                <p className={`font-semibold ${item.completed ? "line-through" : ""}`}>
                  {item.title}
                </p>
                {item.description && (
                  <p className="text-sm text-gray-500">{item.description}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleToggleComplete(item.id, item.completed)}
                />
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteTask(item.id)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </main>
  );
}
