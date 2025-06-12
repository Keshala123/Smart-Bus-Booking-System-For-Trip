import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard/booking");
    } else {
      navigate("/login");
    }
  };

  const images = [
    {
      src: "/images/bus1.jpg",
      alt: "Modern coach bus traveling on highway",
    },
    {
      src: "/images/bus2.jpg",
      alt: "Comfortable bus interior with spacious seating",
    },
    {
      src: "/images/bus3.jpg",
      alt: "Happy travelers boarding a bus",
    },
  ];

  const responsive = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Book Your Bus Journey <span className="text-blue-600">Easily</span>
          </h1>
          <p className="text-lg text-gray-600">
            Fast, convenient, and affordable bus booking for your travels.
          </p>
          <div className="flex justify-center">
          <button
            onClick={handleBookNow}
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-xl">
          <Carousel
            responsive={responsive}
            autoPlay
            infinite
            autoPlaySpeed={3000}
            showDots={true}
            arrows={false}
          >
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={index > 0 ? "lazy" : "eager"}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
