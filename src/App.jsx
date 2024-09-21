import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import ImageCarousel from './components/ImageCarousel';
import { carouselImages } from './constants/data';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import imageArray from './assets';
import BackToTopButton from './components/BackToTopButton';
function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <div className="bg-zinc-900 text-white min-h-screen">
        {/* Header */}
        <Header setIsContactModalOpen={setIsContactModalOpen} brandName="Iconic Events" />
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
        {/* Image Slider */}
        <div className='mb-10'>
          <h2 className="text-4xl font-bold text-center my-6 mt-12">Our Gallery</h2>
          {/* desc */}
          <p className="text-center text-lg mb-12">
            Check out some of the events we have organized
          </p>
          <ImageSlider images={imageArray} />
        </div>
        {/* Footer */}
        <Footer brandName={'Iconic Events'} />
        {/* Contact Modal */}
        <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}>
          <ContactForm onClose={() => setIsContactModalOpen(false)} />
        </Modal>
        <BackToTopButton />
      </div>
    </>
  )
}

export default App
