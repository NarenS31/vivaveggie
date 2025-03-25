"use client";

import * as React from "react";
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
