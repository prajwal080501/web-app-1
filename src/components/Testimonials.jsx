import { useEffect, useState } from "react";
import { testimonials } from "../constants/data";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
const Testimonials = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTestimonialIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000);
        return () => clearInterval(interval);
      }, []);
    return (
        <section className="py-20 bg-orange-500 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="smallGrid"
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 10 0 L 0 0 0 10"
                                fill="none"
                                stroke="white"
                                strokeWidth="0.5"
                            />
                        </pattern>
                        <pattern
                            id="grid"
                            width="100"
                            height="100"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect width="100" height="100" fill="url(#smallGrid)" />
                            <path
                                d="M 100 0 L 0 0 0 100"
                                fill="none"
                                stroke="white"
                                strokeWidth="1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
                <motion.div
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white text-zinc-900 rounded-lg p-6 shadow-lg max-w-2xl mx-auto h-64 flex flex-col justify-between"
                >
                    <div>
                        <FaUser className="text-4xl text-orange-500 mb-4" />
                        <p className="text-lg mb-4">"{testimonials[currentTestimonialIndex].text}"</p>
                    </div>
                    <p className="font-semibold text-right">- {testimonials[currentTestimonialIndex].author}</p>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials;