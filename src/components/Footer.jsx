import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({brandName}) => {
    return (
        <footer className="bg-zinc-800 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-2xl font-bold text-orange-500 mb-4 md:mb-0">{brandName}</div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-orange-500 transition duration-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500 transition duration-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500 transition duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-orange-500 transition duration-300">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;