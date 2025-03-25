
export default function wastetypes() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800">Types of Waste</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Learn about different types of waste and how to dispose of them responsibly.
        </p>
      </section>

      {/* Waste Categories Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">Common Waste Categories</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* General Waste */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/images/general-waste.jpg"
              alt="General Waste"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold text-blue-600 mt-4">General Waste</h4>
            <p className="text-gray-600 mt-2">
              Includes household and office waste such as plastics, packaging, and non-recyclable materials.
            </p>
          </div>

          {/* Green Waste */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/images/green-waste.jpg"
              alt="Green Waste"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold text-green-600 mt-4">Green Waste</h4>
            <p className="text-gray-600 mt-2">
              Organic waste such as grass clippings, leaves, branches, and garden debris.
            </p>
          </div>

          {/* Construction Waste */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/images/construction-waste.jpg"
              alt="Construction Waste"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold text-yellow-600 mt-4">Construction Waste</h4>
            <p className="text-gray-600 mt-2">
              Includes bricks, concrete, timber, and materials from building and demolition projects.
            </p>
          </div>

          {/* Hazardous Waste */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/images/hazardous-waste.jpg"
              alt="Hazardous Waste"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold text-red-600 mt-4">Hazardous Waste</h4>
            <p className="text-gray-600 mt-2">
              Includes chemicals, batteries, paint, and other materials that require special disposal.
            </p>
          </div>

          {/* Electronic Waste */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/images/electronic-waste.jpg"
              alt="Electronic Waste"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold text-purple-600 mt-4">Electronic Waste</h4>
            <p className="text-gray-600 mt-2">
              Discarded electronic devices such as computers, phones, and appliances that need recycling.
            </p>
          </div>

          {/* Recyclable Waste */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <img
              src="/images/recyclable-waste.jpg"
              alt="Recyclable Waste"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-xl font-semibold text-blue-600 mt-4">Recyclable Waste</h4>
            <p className="text-gray-600 mt-2">
              Paper, glass, metal, and plastic materials that can be reused or repurposed.
            </p>
          </div>
        </div>
      </section>

      {/* Disposal Guidelines */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">How to Dispose of Waste Properly</h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Follow these simple steps to ensure responsible waste management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-600">Sort Your Waste</h4>
              <p className="text-gray-600 mt-2">
                Separate recyclables, organic, and hazardous waste to prevent contamination.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-600">Use the Right Bins</h4>
              <p className="text-gray-600 mt-2">
                Dispose of each type of waste in the correct bin to facilitate efficient recycling.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-red-600">Avoid Illegal Dumping</h4>
              <p className="text-gray-600 mt-2">
                Use certified waste disposal services to prevent environmental damage.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
