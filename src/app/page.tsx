"use client";

import * as React from "react";
import CardComponent from "./cardcmp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TodoList = () => {
  const vivaVeggieTargetRef = React.useRef<HTMLDivElement>(null);
  const cards = [
    {
      title: "AP Computer Science Principles",
      imageUrl: "images1.jpeg",
      description:
        "AP Computer Science A is an introductory collegelevel computer science course. Students cultivate their understanding of coding through analyzing, writing, and testing code as they explore concepts like modularity, variables, and control structures.",
    },
    {
      title: "Drafting I ",
      imageUrl: "drafting.jpg",
      description:
        "This course introduces students to the use of simple and complex graphic tools used to communicate and understand ideas and concepts found in the areas of architecture, manufacturing, engineering, science, and mathematics. Topics include problem-solving strategies, classical representation methods such as sketching, geometric construction techniques, as well as computer assisted.",
    },
    {
      title: "PLTW Introduction to Engineering Design ",
      imageUrl: "engineering _design.jpeg",
      description:
        "In this foundation Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students are exposed to the design process, research and analysis, teamwork, communication methods, global and human impacts, engineering standards, and technical documentation. Students use 3D solid modeling design software to help them design solutions to solve proposed problems and learn how to document their work and communicate solutions to peers and members of the professional community.",
    },
    {
      title: "Drafting II Engineering",
      imageUrl: "drafting2.jpeg",
      description:
        "This course teaches the development of knowledge and advanced skills in Engineering Drafting and Design. An understanding of 3D CAD concepts and terms, and the use of 3D CAD software such as INVENTOR or SolidWorks, are essential to this course, and the required method of producing finished drawings. Topics include advanced levels of Engineering Drafting and Design, Career Opportunities, Problem Solving, Manufacturing Processes, ParametricSolid Modeling, Dimensioning and Tolerancing, Working Drawings, and 3D modeling.",
    },
    {
      title: "PLTW Computer Integrated Manufacturing",
      imageUrl: "downloadimage.jpeg",
      description:
        "In this specialization Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students discover and explore manufacturing processes, product design, robotics, and automation, and then they apply what they have learned to design solutions for real-world manufacturing problems.",
    },
    {
      title: "Drafting II Architectural",
      imageUrl: "3dCad.jpeg",
      description:
        "This course focuses on the principles, concepts of architectural design, and use of Building Information Modeling (BIM), used in the field of architecture. An emphasis is placed on the use of 3D CAD tools in the design and execution of floor plans, foundation plans, wall sections, and elevation drawings.",
    },
    {
      title: "PLTW Principles of Engineering",
      imageUrl: "PrinciplesofEngineering.png",
      description:
        "In this foundation Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students survey engineering and are exposed to major concepts they will encounter in a postsecondary engineering course of study. Students employ engineering and scientific concepts in the solution of engineering design problems. They develop problem-solving skills and apply their knowledge of research and design to create solutions to various challenges, documenting their work and communicating solutions to peers and members of the professional community.",
    },
    {
      title: "PLTW Aerospace Engineering",
      imageUrl: "aerospace_engineering.jpeg",
      description:
        "In this specialization Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students design problems related to aerospace information systems, astronautics, rocketry, propulsion, the physics of space science, space life sciences, the biology of space science, principles of aeronautics, structures and materials, and systems engineering. Using 3-D design software, students work in teams utilizing hands-on activities, projects, and problems and are exposed to various situations encountered by aerospace engineers.",
    },
    {
      title: "PLTW Civil Engineering & Architecture",
      imageUrl: "Civil.jpeg",
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
      imageUrl: "compIntegratedManufacturing.jpeg",
      description:
        "In this specialization Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students discover and explore manufacturing processes, product design, robotics, and automation, and then they apply what they have learned to design solutions for real-world manufacturing problems.",
    },
    {
      title: " PLTW Principles of Engineering",
      imageUrl: "eng2.jpeg",
      description:
        "In this specialization Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students design problems related to aerospace information systems, astronautics, rocketry, propulsion, the physics of space science, space life sciences, the biology of space science, principles of aeronautics, structures and materials, and systems engineering. Using 3-D design software, students work in teams utilizing hands-on activities, projects, and problems and are exposed to various situations encountered by aerospace engineers.",
    },
    {
      title: "PLTW Digital Electronics",
      imageUrl: "digtalele.jpeg",
      description:
        "In this foundation Project Lead the Way (PLTW) Pathway to Engineering (PTE) course, students explore the foundations of computing by engaging in circuit design processes to create combinational logic and sequential logic (memory) as electrical engineers do in industry.",
    },
    {
      title: "PLTW Engineering Design & Development",
      imageUrl: "eng1.jpeg",
      description:
        "Engineering (PTE) course, students identify a real-world challenge and then research, design, and test a solution, ultimately presenting their unique solutions to a panel of engineers.",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {" "}
      <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
        {" "}
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            MRHS TSA Webmaster-Naren Saravanan and Akhil Rao
          </h3>{" "}
          <div className="hidden md:flex space-x-4">
            <div className="hidden md:flex space-x-4">
              <Button
                onClick={() => scrollToSection(vivaVeggieTargetRef)}
                variant="default"
                className="w-full text-white bg-blue-500 hover:bg-blue-600 text-sm"
              >
                VivaVeggie
              </Button>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button
                onClick={scrollToTop}
                variant="default"
                className="w-full text-white bg-blue-500 hover:bg-blue-600 text-sm"
              >
                MRHS TSA page
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div
        style={scrollContainerStyle}
        className="bg-gradient-to-br from-green-300 via-green-200 to-green-300"
      >
        <div className="text-center py-8 px-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Marvin Ridge High serves ninth through 12th-grade students and is
            located in Waxhaw.
          </h3>
          <p className="text-xl text-gray-700">
            Marvin Ridge High serves ninth through 12th-grade students and is
            located in Waxhaw. We have a college preparatory emphasis, offering
            a variety of Honors and Advanced Placement classes and an
            International Baccalaureate Diploma program.
          </p>
        </div>
        <div className="text-center py-8 px-4" style={margintopStyle}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Technology/Engineering Program
          </h3>
          <p className="text-xl text-gray-700">
            We have a college preparatory emphasis, offering a Marvin Ridge High
            School offers a Pre-Engineering Academy, a part of Union County
            Public Schools (UCPS) Career & Technical Education (CTE), that
            focuses on applying STEM knowledge to real-world problems through
            hands-on activities and projects, including courses like PLTW Intro
            to Engineering Design and Robotics.
          </p>
        </div>
        <p className="text-xl text-gray-700">
          &nbsp;&nbsp; We do not have a TSA chapter page as this is only our
          second year but here is the our
          <a
            href="https://www.instagram.com/mrhs_tsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600"
          >
            &nbsp;Instagram &nbsp;
          </a>
          and here is our
          <a
            href="https://linktr.ee/mrhs_tsa?utm_source=linktree_profile_share&ltsid=d27accd1-5846-4934-928a-db806fa9b0a0&fbclid=PAZXh0bgNhZW0CMTEAAabsJ5-QoqejRE74pytyJs5XLI8rhXWHNdpaZSfazhf2EFPlfFV3g0WfDps_aem_hEwb0_NFGrBVOKbNfQ1pig"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600"
          >
            &nbsp;linktree
          </a>
        </p>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          &nbsp;&nbsp;Technology/engineering classes offered at the school,
          course summaries
        </h3>
        <a
          href="https://ucpscte.org/find-your-path/?search=school"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600"
        >
          &nbsp;&nbsp; Link to Career and technology education program’s
        </a>

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
        <div
          ref={vivaVeggieTargetRef}
          className="min-h-screen bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white overflow-hidden"
        >
          {/* Header Section */}
          <header className="p-16 text-center bg-gradient-to-r from-green-600 via-green-700 to-green-800 shadow-2xl">
            <h1 className="text-9xl font-extrabold tracking-widest bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent mb-8 animate-text-shine drop-shadow-xl">
              VivaVeggie 🌱 | Redefining the Future of Plant-Based Dining
            </h1>
            <p className="text-4xl max-w-5xl mx-auto leading-relaxed text-gray-200 drop-shadow-lg">
              Step into the world where every dish is a force for good. A world
              where sustainability, innovation, and plant-based perfection
              converge to create the dining experience of tomorrow.
            </p>
          </header>

          {/* Chef Section with Extra Info */}
          <section className="p-16 grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto">
            {[
              {
                name: "Chef Zane Solar",
                role: "Founder & Eco-Gastronomy Pioneer",
                experience: "15 years",
                bio: "Zane Solar is a visionary who’s pioneered solar-powered cooking techniques, revolutionizing how we harness the power of the sun to create eco-conscious cuisine.",
              },
              {
                name: "Chef Miko Verde",
                role: "Sustainable Harvest Strategist",
                experience: "10 years",
                bio: "Miko specializes in eco-farming, from aquaponic systems to regenerative agriculture, ensuring every dish embodies the principles of circular sustainability.",
              },
              {
                name: "Chef Luna Solara",
                role: "Fermentation Virtuoso",
                experience: "8 years",
                bio: "Luna brings the ancient art of fermentation to the future, enhancing plant-based dishes with probiotic-rich, gut-friendly ingredients that promote overall wellness.",
              },
              {
                name: "Chef Kai Terra",
                role: "Edible Insect Innovation Specialist",
                experience: "5 years",
                bio: "Kai’s culinary expertise with edible insects introduces a protein-packed revolution that’s both sustainable and delicious.",
              },
              {
                name: "Chef Amara Lush",
                role: "Aquaponics & Algae Expert",
                experience: "12 years",
                bio: "Amara’s innovative work with algae and seaweed brings nutrient-dense, ocean-restoring ingredients to the forefront of vegan dining.",
              },
            ].map((chef, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-lime-100 text-green-900 p-12 rounded-3xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
              >
                <h2 className="text-5xl font-extrabold mb-4">{chef.name}</h2>
                <p className="text-xl font-semibold text-lime-600">
                  {chef.role}
                </p>
                <p className="text-lg text-gray-800 mt-4">{chef.bio}</p>
                <p className="text-md mt-2 italic text-gray-600">
                  Experience: {chef.experience}
                </p>
              </div>
            ))}
          </section>

          {/* Our Process with Futuristic Technology */}
          <section className="p-20 text-center bg-gradient-to-br from-green-700 to-green-800">
            <h2 className="text-7xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-500 drop-shadow-2xl">
              The Visionary Process: Where Innovation Meets Sustainability
            </h2>
            <p className="text-3xl max-w-6xl mx-auto leading-relaxed text-gray-200 drop-shadow-lg">
              VivaVeggie is a movement. We blend futuristic technology with the
              power of nature. From AI-driven farms to sustainable food
              ecosystems, we’re creating a new world of flavor, wellness, and
              planet-friendly dining.
            </p>
          </section>

          {/* Info Cards - The Cutting-Edge Shit */}
          <section className="p-16 grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-screen-xl mx-auto">
            {[
              {
                title: "AI-Optimized Vertical Farms",
                content:
                  "Our AI-powered hydroponic farms grow crops in a controlled, energy-efficient environment. They use 90% less water and 70% less land than traditional agriculture while delivering nutrient-dense, high-yield produce.",
                extraInfo:
                  "Machine learning algorithms monitor and adjust light, temperature, and humidity in real time, ensuring the healthiest, most flavorful crops possible—every time.",
                image: "url-to-image",
              },
              {
                title: "Next-Level Soy Protein",
                content:
                  "Soy farming produces high-quality, sustainable protein with minimal ecological impact. Our soy-based products offer a versatile and ethical protein source that meets the demands of plant-based diets.",
                extraInfo:
                  "Soy protein contains all nine essential amino acids and is a sustainable alternative to traditional meat products, with a smaller carbon footprint and greater versatility in plant-based dishes.",
                image: "url-to-image",
              },
              {
                title: "Regenerative Ocean Farming",
                content:
                  "We collaborate with marine biologists to cultivate seaweed and algae, powerful carbon-capture crops that help restore ocean ecosystems while providing health-boosting nutrients.",
                extraInfo:
                  "Seaweed absorbs more carbon than terrestrial plants, and we use it to enrich our dishes with Omega-3s, antioxidants, and anti-inflammatory compounds that boost brain and heart health.",
                image: "url-to-image",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-xl shadow-2xl hover:scale-105 transition-transform p-10 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 p-4 bg-gradient-to-r from-green-400 to-lime-300 rounded-full text-white shadow-md">
                  🌍
                </div>
                <CardContent>
                  <h3 className="text-5xl font-bold mb-6 text-green-800">
                    {item.title}
                  </h3>
                  <p className="text-xl text-gray-800 mb-6">{item.content}</p>
                  <p className="text-md text-gray-600">{item.extraInfo}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Gourmet Vegan Menu */}
          <section className="p-20">
            <h2 className="text-7xl font-extrabold mb-16 text-center bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent drop-shadow-2xl">
              The Ultimate Vegan Menu: A Culinary Odyssey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                {
                  name: "Celestial Mushroom & Truffle Tacos",
                  description:
                    "A divine taco featuring locally sourced mushrooms, sprouted quinoa, and a delicate truffle oil drizzle, topped with microgreens.",
                  price: "$22",
                },
                {
                  name: "Neptune’s Kelp Sushi Rolls",
                  description:
                    "Sustainable sushi made with hand-harvested kelp, wild mushrooms, and avocado, drizzled with tamari and sesame oil.",
                  price: "$26",
                },
                {
                  name: "Chia-Infused Soy Protein Caviar Toast",
                  description:
                    "An avant-garde dish combining soy protein caviar on toasted sourdough, garnished with pickled radishes and microgreens.",
                  price: "$24",
                },
                {
                  name: "Solar-Powered Sunchoke Gratin",
                  description:
                    "A velvety gratin made from organic sunchokes, slow-cooked and topped with vegan parmesan, enhancing flavors to perfection.",
                  price: "$25",
                },
                {
                  name: "Blue Spirulina Seaweed Smoothie",
                  description:
                    "A revitalizing smoothie packed with blue spirulina, seaweed, and nutrient-dense coconut milk, energizing you from the inside out.",
                  price: "$14",
                },
                {
                  name: "Edible Orchid & Jasmine Risotto",
                  description:
                    "A fragrant risotto infused with delicate orchid petals, wild jasmine, and roasted root vegetables, a true celebration of nature’s beauty.",
                  price: "$28",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-lime-200 text-green-900 p-12 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-5xl font-extrabold mb-6">{item.name}</h3>
                  <p className="text-lg mb-4">{item.description}</p>
                  <p className="text-3xl font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Section */}
          {/* <footer className="p-16 text-center bg-gradient-to-r from-lime-400 to-green-500 text-white">
            <p className="text-2xl">
              &copy; {new Date().getFullYear()} VivaVeggie | Leading the
              Plant-Based Revolution 🌱
            </p>
          </footer> */}
        </div>
      </div>
    </>
  );
};

const margintopStyle: React.CSSProperties = {
  marginTop: "-50px",
};

const scrollContainerStyle: React.CSSProperties = {
  height: "85vh", // Set the height of the scrollable area
  overflowY: "scroll", // Enables vertical scrolling
  paddingRight: "10px", // Space for the scrollbar
  border: "0px solid #ddd", // Optional border to outline the scrollable area
  width: "110%",
};

const rightAlignStyle: React.CSSProperties = {
  float: "right",
};
const cardListStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  //padding: "20px",
};

export default TodoList;
