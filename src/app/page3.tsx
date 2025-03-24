// components/TodoList.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TodoList = () => {
  const [tasks, setTasks] = useState<TodoItem[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTask(); // Call handleAddTask when Enter key is pressed
    }
  };

  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="w-full mx-auto mt-10 space-y-4 px-4">
      <h3 className="text-xl font-semibold mb-4">Todo List</h3>

      <div className="flex mb-4 space-x-2">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a new task"
          className="flex-grow"
        />
        <Button onClick={handleAddTask} className="bg-blue-500 text-white">
          Add
        </Button>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p>No tasks to show</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between items-center p-2 rounded-md ${
                  task.completed ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleCompletion(task.id)}
                    className="h-4 w-4"
                  />
                  <span
                    className={`${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <Button
                  variant="link"
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500"
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

// export default function TodoList() {
//   const [tasks, setTasks] = useState<TodoItem[]>([]);
//   const [task, setTask] = useState("");

//   const addTask = () => {
//     if (task.trim() === "") return;
//     setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
//     setTask("");
//   };

//   const toggleComplete = (id: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (id: number) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 space-y-4">
//       <div className="flex gap-2">
//         <Input
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Add a new task"
//         />
//         <Button onClick={addTask}>Add</Button>
//       </div>
//       <div className="space-y-2">
//         {tasks.map((task) => (
//           <Card key={task.id} className="flex justify-between p-4 items-center">
//             <div
//               className={`flex-1 cursor-pointer ${
//                 task.completed ? "line-through text-gray-500" : ""
//               }`}
//               onClick={() => toggleComplete(task.id)}
//             >
//               {task.text}
//             </div>
//             <div className="flex gap-2">
//               <CheckCircle
//                 className={`cursor-pointer ${
//                   task.completed ? "text-green-500" : "text-gray-300"
//                 }`}
//                 onClick={() => toggleComplete(task.id)}
//               />
//               <Trash2
//                 className="cursor-pointer text-red-500"
//                 onClick={() => deleteTask(task.id)}
//               />
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
