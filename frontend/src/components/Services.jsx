import React from "react";
import { motion } from "framer-motion";
import { FaBus, FaCalendarCheck, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Easy Online Booking",
      description: "Book your bus in minutes with our user-friendly platform.",
      icon: <FaCalendarCheck className="text-4xl text-indigo-600 mb-4" />,
    },
    {
      title: "Comfortable Travel",
      description: "Enjoy modern buses with AC, Wi-Fi, and spacious seating.",
      icon: <FaBus className="text-4xl text-indigo-600 mb-4" />,
    },
    {
      title: "Affordable Prices",
      description: "Get the best deals and discounts on bus tickets.",
      icon: <FaMoneyBillWave className="text-4xl text-indigo-600 mb-4" />,
    },
    {
      title: "24/7 Support",
      description: "Our support team is available anytime to assist you.",
      icon: <FaHeadset className="text-4xl text-indigo-600 mb-4" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide exceptional services to make your journey comfortable and hassle-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;