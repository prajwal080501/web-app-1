import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import ImageCarousel from './components/ImageCarousel';
import { carouselImages } from './constants/data';
function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  
  return (
    <>
      <div className="bg-zinc-900 text-white min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-zinc-800 bg-opacity-90 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-orange-500"
            >
              Iconic Events
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact Us
            </motion.button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center">
          <div className="absolute inset-0 z-0">
            <ImageCarousel images={carouselImages} />
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Create Unforgettable Events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              From weddings to corporate gatherings, we make every moment special
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-600 transition duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* Testimonial Section */}
        <Testimonials />

        {/* Footer */}
        <Footer />
        {/* Contact Modal */}
        <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
          <ContactForm onClose={() => setIsContactModalOpen(false)} />
        </Modal>
      </div>
    </>
  )
}

export default App
