// "use client"

// import "./MainCarousel.css";
// import { useEffect } from "react";

// export default function MainCarousel() {
//   useEffect(() => {
//     const carousel = document.getElementById("myCarousel");
//     const captions = carousel.querySelectorAll(".carousel-caption");

//     // Add the 'fade-in' class to the active caption when the slide changes
//     carousel.addEventListener("slide.bs.carousel", (event) => {
//       captions.forEach((caption) => caption.classList.remove("fade-in"));
//       const nextCaption = event.relatedTarget.querySelector(".carousel-caption");
//       nextCaption.classList.add("fade-in");
//     });

//     // Ensure the first caption has the effect on page load
//     captions[0].classList.add("fade-in");
//   }, []);

//   return (
//     <div id="myCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#myCarousel"
//           data-bs-slide-to="0"
//           className="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#myCarousel"
//           data-bs-slide-to="1"
//           aria-label="Slide 2"
//         ></button>
//         <button
//           type="button"
//           data-bs-target="#myCarousel"
//           data-bs-slide-to="2"
//           aria-label="Slide 3"
//         ></button>
//       </div>
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <svg
//             className="bd-placeholder-img"
//             width="100%"
//             height="100%"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//             preserveAspectRatio="xMidYMid slice"
//             focusable="false"
//           >
//             <rect width="100%" height="100%" fill="#777" />
//           </svg>

//           <div className="container">
//             <div className="carousel-caption text-start">
//               <h1>Example headline.</h1>
//               <p>
//                 Some representative placeholder content for the first slide of
//                 the carousel.
//               </p>
//               <p>
//                 <a className="btn btn-lg btn-primary" href="#">
//                   Sign up today
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <svg
//             className="bd-placeholder-img"
//             width="100%"
//             height="100%"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//             preserveAspectRatio="xMidYMid slice"
//             focusable="false"
//           >
//             <rect width="100%" height="100%" fill="#777" />
//           </svg>

//           <div className="container">
//             <div className="carousel-caption">
//               <h1>Another example headline.</h1>
//               <p>
//                 Some representative placeholder content for the second slide of
//                 the carousel.
//               </p>
//               <p>
//                 <a className="btn btn-lg btn-primary" href="#">
//                   Learn more
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="carousel-item">
//           <svg
//             className="bd-placeholder-img"
//             width="100%"
//             height="100%"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//             preserveAspectRatio="xMidYMid slice"
//             focusable="false"
//           >
//             <rect width="100%" height="100%" fill="#777" />
//           </svg>

//           <div className="container">
//             <div className="carousel-caption text-end">
//               <h1>One more for good measure.</h1>
//               <p>
//                 Some representative placeholder content for the third slide of
//                 this carousel.
//               </p>
//               <p>
//                 <a className="btn btn-lg btn-primary" href="#">
//                   Browse gallery
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#myCarousel"
//         data-bs-slide="prev"
//       >
//         <span
//           className="carousel-control-prev-icon"
//           aria-hidden="true"
//         ></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#myCarousel"
//         data-bs-slide="next"
//       >
//         <span
//           className="carousel-control-next-icon"
//           aria-hidden="true"
//         ></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }


"use client"

import "./MainCarousel.css";
import { useEffect } from "react";

export default function MainCarousel() {
  useEffect(() => {
    const carousel = document.getElementById("myCarousel");
    const captions = carousel.querySelectorAll(".carousel-caption");

    // Function to add fade-in effect to the active slide's caption
    const handleSlideChange = (event) => {
      captions.forEach((caption) => caption.classList.remove("fade-in"));
      const nextCaption = event.relatedTarget.querySelector(".carousel-caption");
      if (nextCaption) nextCaption.classList.add("fade-in");
    };

    // Add event listener for slide transitions
    carousel.addEventListener("slid.bs.carousel", handleSlideChange);

    // Ensure the first caption has the effect on page load
    captions[0].classList.add("fade-in");

    // Cleanup event listener on component unmount
    return () => carousel.removeEventListener("slid.bs.carousel", handleSlideChange);
  }, []);

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777" />
          </svg>

          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Sign up today
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777" />
          </svg>

          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777" />
          </svg>

          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
