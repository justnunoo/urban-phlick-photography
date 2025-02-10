"use client";

import { useEffect } from "react";
import Image from "next/image";
import "./section.css"

export default function Section() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-up");

    const handleScroll = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom > 0
        ) {
          element.classList.add("in-view");
        }
      });
    };

    // Throttle the scroll event to improve performance
    const throttledScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledScroll);
    handleScroll(); // Initial check for elements already in view

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <section id="services" className="container">
      <h2 className="text-center py-4">Our Services</h2>
      {/* <div className="service-item animate-up mb-2">
        <h3>Relining of Mills</h3>
        <p>We offer expert relining of mills to ensure optimal performance and longevity.</p>
        <Image
          src="https://via.placeholder.com/600x400"
          width={600}
          height={400}
          className="img-fluid"
          alt="Relining of Mills"
        />
      </div> */}

      <div className="row featurette animate-up">
      <div className="col-md-7 order-md-2 ">
        <h3 className="featurette-heading">Relining of Mills</h3>
        <p className="lead">We offer expert relining of mills to ensure optimal performance and longevity.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="600" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
        {/* <div className="image-container">
        <Image 
          src={photo1}
          width={600}
          height={600}
          className="img-fluid image"
          alt="Relining of Mills"
          placeholder="blur"
        />
        </div> */}
      </div>
    </div>

    <hr className="featurette-divider"></hr>

{/* 
      <div className="service-item animate-up mb-2">
        <h3>Grinding Mill Relining</h3>
        <p>
          Our grinding mill relining services are second to none, providing efficiency and safety.
        </p>
        <Image
          src="https://via.placeholder.com/600x400"
          width={600}
          height={400}
          className="img-fluid"
          alt="Grinding Mill Relining"
        />
      </div> */}

      <div className="row featurette animate-up">
      <div className="col-md-7">
        <h3 className="featurette-heading">Grinding Mill Relining</h3>
        <p className="lead">Our grinding mill relining services are second to none, providing efficiency and safety.</p>
      </div>
      <div className="col-md-5">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="600" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div> 

    <hr className="featurette-divider"></hr>
      
    <div className="row featurette animate-up">
      <div className="col-md-7 order-md-2 ">
        <h3 className="featurette-heading">Maintenance Services</h3>
        <p className="lead">Comprehensive maintenance services to keep your equipment running smoothly.</p>
      </div>
      <div className="col-md-5 order-md-1">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="600" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

{/* 
      <div className="service-item animate-up mb-2">
        <h3>Maintenance Services</h3>
        <p>Comprehensive maintenance services to keep your equipment running smoothly.</p>
        <Image
          src="https://via.placeholder.com/600x400"
          width={600}
          height={400}
          className="img-fluid"
          alt="Maintenance Services"
        />
      </div> */}
    </section>
  );
}

// Utility function for throttling
function throttle(fn, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}