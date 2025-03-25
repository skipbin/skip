export default function Bins() {
  const binsData = [
    {
      title: "Marrel Skip Bin",
      description: "Marrel skip bins are a popular choice for both domestic and commercial waste disposal needs. They range from 2 to 17 cubic metres and are designed with tall sides and a compact length. Some have wheelbarrow access for easy loading.",
      image: "/images/marrel-bin.jpg",
      note: "Not all Bins Have Doors On Them. Please Specify If A Door Is Needed On Your Bin When Ordering."
    },
    {
      title: "Hook Lift Skip Bin",
      description: "Hook lift skip bins are loaded and unloaded using a hook attached to a truck. With rear doors for easy loading and sizes ranging from 4 to 30 cubic metres, they are ideal for large-scale waste management.",
      image: "/images/hooklift.jpeg",
      note: "Primarily used for commercial waste, but can be used for large domestic projects."
    },
    {
      title: "Mobile Skip Bin",
      description: "Mobile skip bins are ideal for tight spaces like carports or underground office parking. They come with a lockable lid, eliminating the need for a permit when placed on council land.",
      image: "/images/mobilebin.jpeg",
      note: "Perfect for general, green, and light construction waste. For heavier waste, choose a specialised bin."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-400 to-teal-600 py-16 text-center px-4 text-white">
        <h2 className="text-4xl font-bold">Our Bins</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Choose from a range of skip bins to suit your waste disposal needs. We offer flexible options for both commercial and domestic purposes.
        </p>
      </section>

      {/* Bin Categories Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Types of Bins We Offer</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {binsData.map((bin, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition transform hover:-translate-y-1">
              <img
                src={bin.image}
                alt={bin.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="text-xl font-semibold mt-4">{bin.title}</h4>
              <p className="text-gray-600 mt-2">{bin.description}</p>
              <p className="text-sm text-red-600 mt-4">{bin.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Why Choose Our Skip Bins?</h3>
        <ul className="max-w-3xl mx-auto text-gray-700 list-disc pl-8 space-y-4">
          <li>Convenient sizes for all types of projects.</li>
          <li>Eco-friendly waste management solutions.</li>
          <li>Fast and reliable delivery and pickup services.</li>
          <li>Affordable pricing with no hidden fees.</li>
          <li>Expert advice on choosing the right bin size.</li>
        </ul>
      </section>

    </div>
  );
}