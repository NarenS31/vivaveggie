import { Card, CardContent } from "@/components/ui/card";

export default function VivaVeggie() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white overflow-hidden">
      {/* Header Section */}
      <header className="p-16 text-center bg-gradient-to-r from-green-600 via-green-700 to-green-800 shadow-2xl">
        <h1 className="text-9xl font-extrabold tracking-widest bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent mb-8 animate-text-shine drop-shadow-xl">
          VivaVeggie 🌱 | Redefining the Future of Plant-Based Dining
        </h1>
        <p className="text-4xl max-w-5xl mx-auto leading-relaxed text-gray-200 drop-shadow-lg">
          Step into the world where every dish is a force for good. A world
          where sustainability, innovation, and plant-based perfection converge
          to create the dining experience of tomorrow.
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
            <p className="text-xl font-semibold text-lime-600">{chef.role}</p>
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
          power of nature. From AI-driven farms to sustainable food ecosystems,
          we’re creating a new world of flavor, wellness, and planet-friendly
          dining.
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
      <footer className="p-16 text-center bg-gradient-to-r from-lime-400 to-green-500 text-white">
        <p className="text-2xl">
          &copy; {new Date().getFullYear()} VivaVeggie | Leading the Plant-Based
          Revolution 🌱
        </p>
      </footer>
    </div>
  );
}
