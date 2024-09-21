// design a back to top button that will appear when the user scrolls down the page

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }
    , []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed z-100 bottom-4 right-4 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
                >
                    <FaArrowUp className="
                        h-6
                        w-6

                    " />
                </button>
            )}
        </div>
    );
}

export default BackToTopButton;