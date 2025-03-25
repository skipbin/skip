export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
{/* Profile Section */}
<section className="text-center max-w-lg">
  <div className="w-60 h-60 rounded-full overflow-hidden mx-auto shadow-lg bg-gray-100">
    <img 
      src="/logo.png" 
      alt="Skip Bin Hire" 
      className="w-full h-full object-contain"
    />
  </div>
  <h2 className="text-4xl font-bold mt-6">Hello,</h2>
  <p className="text-gray-600 text-lg mt-4">
    Welcome to <span className="font-semibold">Skip Bin Hire</span>! 🗑️ Your reliable partner in waste management. We provide efficient, eco-friendly, and affordable skip bin solutions for homes, businesses, and construction sites.
  </p>
  <p className="text-gray-600 text-lg mt-4">
    From small cleanouts to large-scale projects, our bins are designed to handle all your waste disposal needs. Let’s keep our environment clean and green together! 🌱 #SkipSmart
  </p>
</section>


      {/* About Section */}
      <section className="text-center max-w-4xl mt-16">
        <h3 className="text-3xl font-bold text-gray-800">Who We Are</h3>
        <p className="text-gray-600 mt-4">
          At <span className="font-semibold">Skip Bin Hire</span>, we believe in responsible waste management. Our mission is to provide accessible waste disposal solutions to individuals, businesses, and communities. With years of experience, we understand the importance of efficient and sustainable waste management.
        </p>
        <p className="text-gray-600 mt-4">
          Our services are tailored to meet the diverse needs of our customers. From household renovations to large-scale construction projects, we offer a range of skip bin sizes to ensure waste removal is hassle-free.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center max-w-4xl mt-16">
        <h3 className="text-3xl font-bold text-gray-800">Why Choose Us?</h3>
        <ul className="text-gray-600 mt-4 space-y-4">
          <li>✅ <span className="font-semibold">Reliable Service:</span> On-time bin delivery and collection for your convenience.</li>
          <li>🌍 <span className="font-semibold">Eco-Friendly Solutions:</span> We recycle and dispose of waste responsibly, reducing landfill impact.</li>
          <li>🏗️ <span className="font-semibold">Versatile Bins:</span> A wide range of skip bin sizes for residential, commercial, and industrial use.</li>
          <li>💰 <span className="font-semibold">Affordable Pricing:</span> Competitive rates with no hidden fees.</li>
          <li>📞 <span className="font-semibold">Friendly Support:</span> Our team is here to help with expert advice on waste management.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="text-center max-w-4xl mt-16">
        <h3 className="text-3xl font-bold text-gray-800">Let’s Work Together!</h3>
        <p className="text-gray-600 mt-4">
          Whether you’re tackling a home project, managing a construction site, or just need an efficient waste management solution, we’ve got you covered.
        </p>
        <a href="/contact" className="inline-block mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
          Contact Us Today
        </a>
      </section>
    </div>
  );
}
