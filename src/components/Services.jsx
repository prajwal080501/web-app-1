import { useState, memo } from "react";
import { motion } from "framer-motion";
import { services } from "../constants/data";
import Modal from "./Modal";
import ServiceDetail from "./ServiceDetail";

const Services = memo(function(){
    const [selectedService, setSelectedService] = useState(null);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

    const openServiceModal = (service) => {
        setSelectedService(service);
        setIsServiceModalOpen(true);
      };
    return (
        <>
            <section className="py-20 bg-zinc-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-zinc-700 rounded-lg p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                    <p className="text-gray-300 mb-4">{service.description}</p>
                                </div>
                                <button
                                    className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 mt-4"
                                    onClick={() => openServiceModal(service)}
                                >
                                    Explore
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Modal isOpen={isServiceModalOpen} onClose={() => setIsServiceModalOpen(false)}>
                {selectedService && (
                    <ServiceDetail service={selectedService} onClose={() => setIsServiceModalOpen(false)} />
                )}
            </Modal>
        </>
    )
})

export default Services;