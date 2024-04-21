import React from 'react'
import { BsArrowUp } from "react-icons/bs";

function ScrollToHome() {
    const handleScrollToHome = () => {
        const home = document.getElementById("home");
        if (home) {
          home.scrollIntoView({ behavior: "smooth" });
        }
      };
          return (
        <button className="drop-shadow-4xl rounded-full bg-white text-heading-color right-12 p-4 text-xl z-20 absolute animate-pulse" style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          onClick={handleScrollToHome}
        >
          <BsArrowUp />
        </button>
      );
    };

export default ScrollToHome;
