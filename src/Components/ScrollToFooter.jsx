import React from 'react'
import { BsArrowDown } from "react-icons/bs";

function ScrollToFooter() {
    const handleScrollToFooter = () => {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      };
          return (
        <button className="drop-shadow-4xl rounded-full bg-white text-heading-color right-12 bottom-14 p-4 text-xl z-20 absolute animate-pulse" style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          onClick={handleScrollToFooter}
        >
          <BsArrowDown />
        </button>
      );
    };

export default ScrollToFooter;
