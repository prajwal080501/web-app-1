import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        onClose();
    };

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 text-orange-500">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg bg-zinc-700 text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg bg-zinc-700 text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg bg-zinc-700 text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                        rows="6"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 w-full text-lg font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div className="md:w-1/3">
                <h2 className="text-3xl font-bold mb-6 text-orange-500">Company Details</h2>
                <div className="space-y-6">
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-orange-500 mr-4 text-2xl" />
                        <p className="text-lg">123 Event Street, City, Country</p>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className="text-orange-500 mr-4 text-2xl" />
                        <p className="text-lg">+1 234 567 8901</p>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="text-orange-500 mr-4 text-2xl" />
                        <p className="text-lg">info@eventmasters.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;