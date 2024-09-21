import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from "../assets/logo.png";
const Header = ({ setIsContactModalOpen, brandName }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-transparent" : "bg-zinc-800 bg-opacity-90 backdrop-filter backdrop-blur-lg"}`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-2xl font-bold text-orange-500 ${isScrolled ? "hidden" : ""}`}
                >
                    {brandName}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-18 h-18 p-2 bg-gray-500/50 rounded-full flex items-center justify-center ${isScrolled ? "block" : "hidden"} mx-auto`}
                >
                    <img src={logo} alt="Logo" className="w-14 object-contain h-14 rounded-full" />
                </motion.div>
                <motion.button
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300 ${isScrolled ? "hidden" : "block"}`}
                    onClick={() => setIsContactModalOpen(true)}
                >
                    Contact Us
                </motion.button>
            </div>
        </header>
    )
}

export default Header;