import { motion } from 'framer-motion';
import { FaStar, FaRecycle, FaTruck, FaLeaf, FaHandsHelping, FaShieldAlt, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-xl font-bold text-teal-500 mb-2">WHY CHOOSE US</h2>
        <motion.h1 
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Trusted Skip Bin Service Partner
        </motion.h1>
        <p className="text-gray-600 mb-10">Efficient, Reliable, and Eco-Friendly Waste Management Solutions for Every Need.</p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-teal-500 text-sm font-bold mb-2">ECO-FRIENDLY SOLUTIONS</h3>
            <h4 className="text-2xl font-semibold mb-2">Committed to a Cleaner Environment</h4>
            <p className="text-teal-500 text-4xl font-bold mb-2">4.9</p>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="inline text-yellow-400" />
            ))}
            <p className="text-gray-500 mt-2">Based on thousands of satisfied customer reviews.</p>
          </div>

          <div className="space-y-6 text-left">
            <div className="flex items-start">
              <FaTruck className="text-yellow-500 text-xl mr-4" />
              <div>
                <h5 className="text-xl font-bold">Fast and Reliable Service</h5>
                <p>Experience prompt delivery and pickup, ensuring your project stays on schedule.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaRecycle className="text-blue-500 text-xl mr-4" />
              <div>
                <h5 className="text-xl font-bold">Sustainable Waste Management</h5>
                <p>We prioritize recycling and responsible disposal to minimize landfill waste.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaLeaf className="text-gray-600 text-xl mr-4" />
              <div>
                <h5 className="text-xl font-bold">Eco-Friendly Solutions</h5>
                <p>Our green practices promote a healthier, more sustainable environment.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaHandsHelping className="text-teal-500 text-xl mr-4" />
              <div>
                <h5 className="text-xl font-bold">Dedicated Customer Support</h5>
                <p>Our friendly team is available to assist you every step of the way.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaShieldAlt className="text-indigo-500 text-xl mr-4" />
              <div>
                <h5 className="text-xl font-bold">Safe and Compliant</h5>
                <p>We adhere to all local regulations and safety standards to ensure responsible waste management.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mt-12 p-8 rounded-xl shadow-lg grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-3xl font-bold text-teal-500">5000+</p>
            <p>Happy Customers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-500">20+</p>
            <p>Service Areas</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-500">4000+</p>
            <p>Successful Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-500">100%</p>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
