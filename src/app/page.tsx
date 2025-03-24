// components/TodoList.tsx
"use client";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const TodoList = () => {
//   const [tasks, setTasks] = useState<TodoItem[]>([]);
//   const [newTask, setNewTask] = useState("");

//   const handleAddTask = () => {
//     if (newTask.trim() !== "") {
//       setTasks([
//         ...tasks,
//         { id: Date.now(), text: newTask.trim(), completed: false },
//       ]);
//       setNewTask("");
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       handleAddTask(); // Call handleAddTask when Enter key is pressed
//     }
//   };

//   const toggleCompletion = (id: number) => {
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
//     <div className="w-full mx-auto mt-10 space-y-4 px-4">
//       <h3 className="text-xl font-semibold mb-4">Todo List</h3>

//       <div className="flex mb-4 space-x-2">
//         <Input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           onKeyDown={handleKeyPress}
//           placeholder="Add a new task"
//           className="flex-grow"
//         />
//         <Button onClick={handleAddTask} className="bg-blue-500 text-white">
//           Add
//         </Button>
//       </div>

//       <div>
//         {tasks.length === 0 ? (
//           <p>No tasks to show</p>
//         ) : (
//           <ul className="space-y-2">
//             {tasks.map((task) => (
//               <li
//                 key={task.id}
//                 className={`flex justify-between items-center p-2 rounded-md ${
//                   task.completed ? "bg-green-100" : "bg-gray-100"
//                 }`}
//               >
//                 <div className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={() => toggleCompletion(task.id)}
//                     className="h-4 w-4"
//                   />
//                   <span
//                     className={`${
//                       task.completed ? "line-through text-gray-400" : ""
//                     }`}
//                   >
//                     {task.text}
//                   </span>
//                 </div>
//                 <Button
//                   variant="link"
//                   onClick={() => deleteTask(task.id)}
//                   className="text-red-500"
//                 >
//                   Delete
//                 </Button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TodoList;

// interface TodoItem {
//   id: number;
//   text: string;
//   completed: boolean;
// }

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardComponent from "./cardcmp";

const TodoList = () => {
  const cards = [
    {
      title: "AP Computer Science Principles",
      imageUrl: "images1.jpeg",
      description:
        "AP Computer Science A is an introductory collegelevel computer science course. Students cultivate their understanding of coding through analyzing, writing, and testing code as they explore concepts like modularity, variables, and control structures.",
    },
    {
      title: "Drafting I ",
      imageUrl: "images1.jpeg",
      description:
        "This course introduces students to the use of simple and complex graphic tools used to communicate and understand ideas and concepts found in the areas of architecture, manufacturing, engineering, science, and mathematics. Topics include problem-solving strategies, classical representation methods such as sketching, geometric construction techniques, as well as computer assisted.",
    },
    {
      title: "PLTW Introduction to Engineering Design ",
      imageUrl: "images1.jpeg",
      description:
        "In this foundation Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students are exposed to the design process, research and analysis, teamwork, communication methods, global and human impacts, engineering standards, and technical documentation. Students use 3D solid modeling design software to help them design solutions to solve proposed problems and learn how to document their work and communicate solutions to peers and members of the professional community.",
    },
    {
      title: "Drafting II Engineering",
      imageUrl: "images1.jpeg",
      description:
        "This course teaches the development of knowledge and advanced skills in Engineering Drafting and Design. An understanding of 3D CAD concepts and terms, and the use of 3D CAD software such as INVENTOR or SolidWorks, are essential to this course, and the required method of producing finished drawings. Topics include advanced levels of Engineering Drafting and Design, Career Opportunities, Problem Solving, Manufacturing Processes, ParametricSolid Modeling, Dimensioning and Tolerancing, Working Drawings, and 3D modeling.",
    },
    {
      title: "PLTW Computer Integrated Manufacturing",
      imageUrl: "images1.jpeg",
      description:
        "In this specialization Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students discover and explore manufacturing processes, product design, robotics, and automation, and then they apply what they have learned to design solutions for real-world manufacturing problems.",
    },
    {
      title: "Drafting II Architectural",
      imageUrl: "images1.jpeg",
      description:
        "This course focuses on the principles, concepts of architectural design, and use of Building Information Modeling (BIM), used in the field of architecture. An emphasis is placed on the use of 3D CAD tools in the design and execution of floor plans, foundation plans, wall sections, and elevation drawings.",
    },
    {
      title: "PLTW Principles of Engineering",
      imageUrl: "images1.jpeg",
      description:
        "In this foundation Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students survey engineering and are exposed to major concepts they will encounter in a postsecondary engineering course of study. Students employ engineering and scientific concepts in the solution of engineering design problems. They develop problem-solving skills and apply their knowledge of research and design to create solutions to various challenges, documenting their work and communicating solutions to peers and members of the professional community.",
    },
    {
      title: "PLTW Aerospace Engineering",
      imageUrl: "images1.jpeg",
      description:
        "In this specialization Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students design problems related to aerospace information systems, astronautics, rocketry, propulsion, the physics of space science, space life sciences, the biology of space science, principles of aeronautics, structures and materials, and systems engineering. Using 3-D design software, students work in teams utilizing hands-on activities, projects, and problems and are exposed to various situations encountered by aerospace engineers.",
    },
    {
      title: "PLTW Civil Engineering & Architecture",
      imageUrl: "images1.jpeg",
      description:
        "In this capstone Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students identify a real-world challenge and then research, design, and test a solution, ultimately presenting their unique solutions to a panel of engineers.",
    },
    {
      title: "PLTW Introduction to Engineering Design",
      imageUrl: "images1.jpeg",
      description:
        "In this foundation Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students are exposed to the design process, research and analysis, teamwork, communication methods, global and human impacts, engineering standards, and technical documentation. Students use 3D solid modeling design software to help them design solutions to solve proposed problems and learn how to document their work and communicate solutions to peers and members of the professional community.",
    },
    {
      title: "PLTW Computer Integrated Manufacturing",
      imageUrl: "images1.jpeg",
      description:
        "In this specialization Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students discover and explore manufacturing processes, product design, robotics, and automation, and then they apply what they have learned to design solutions for real-world manufacturing problems.",
    },
    {
      title: " PLTW Principles of Engineering",
      imageUrl: "images1.jpeg",
      description:
        "In this specialization Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students design problems related to aerospace information systems, astronautics, rocketry, propulsion, the physics of space science, space life sciences, the biology of space science, principles of aeronautics, structures and materials, and systems engineering. Using 3-D design software, students work in teams utilizing hands-on activities, projects, and problems and are exposed to various situations encountered by aerospace engineers.",
    },
    {
      title: "PLTW Digital Electronics",
      imageUrl: "images1.jpeg",
      description:
        "In this foundation Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students explore the foundations of computing by engaging in circuit design processes to create combinational logic and sequential logic (memory) as electrical engineers do in industry.",
    },
    {
      title: "PLTW Engineering Design & Development",
      imageUrl: "images1.jpeg",
      description:
        "Engineering (PTE) course, students identify a real-world challenge and then research, design, and test a solution, ultimately presenting their unique solutions to a panel of engineers.",
    },
  ];

  return (
    <div style={scrollContainerStyle}>
      <div style={cardListStyle}>
        {cards.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>

    // <Card className="w-[350px]" style={cardStyle}>
    //   <CardHeader>
    //     <CardTitle>Create project</CardTitle>
    //     <CardDescription>Deploy your new project in one-click.</CardDescription>
    //   </CardHeader>
    //   <CardContent></CardContent>
    //   <CardFooter className="flex justify-between"></CardFooter>
    // </Card>
  );
};

const scrollContainerStyle: React.CSSProperties = {
  height: "85vh", // Set the height of the scrollable area
  overflowY: "scroll", // Enables vertical scrolling
  paddingRight: "10px", // Space for the scrollbar
  border: "0px solid #ddd", // Optional border to outline the scrollable area
  width: "110%",
};

const cardListStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  //padding: "20px",
};

const cardStyle: React.CSSProperties = {
  marginTop: "60px",
  backgroundColor: "#e8f5e9",
};

export default TodoList;
