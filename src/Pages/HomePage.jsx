import React from "react";
import ScrollSpy from "react-scrollspy";
import Home from "../Components/Home";
import Pricing from "../Components/Pricing";
import Work from "../Components/Work";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Questions from "../Components/Questions";

function HomePage() {
  

  return (
    <div className="HomePage">
      <Navbar />
      <ScrollSpy
        items={["home", "work", "pricing", "testimonial", "contact", "footer"]}
        currentClassName="is-current"
        offset={-100}
      >
        <div id="home">
          <Home />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="testimonial">
          <Testimonial />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <Questions/>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </ScrollSpy>

    </div>
  );
}

export default HomePage;
