// 'use client';

// import Image from 'next/image';
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-2xl font-bold font-serif">
//           Urban Phlick
//         </div>
//         {/* <Image src="/images/urban_phlick_logo.jpg" alt="logo" width={50} height={50} className='rounded-lg' /> */}
//         {/* <Image src="/images/Screenshot 2025-02-10 025018.png" alt="logo" width={50} height={50} className='rounded-lg' /> */}

//         {/* Hamburger Menu (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleNavbar}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Nav Links (Desktop) */}
//         <div className="hidden md:flex space-x-28 mx-auto">
//           <a href="#" className="text-white hover:text-gray-400">
//             Home
//           </a>
//           <a href="#" className="text-white hover:text-gray-400">
//             About
//           </a>
//           <a href="#" className="text-white hover:text-gray-400">
//             Contact
//           </a>
//         </div>
//       </div>

//       {/* Collapsible Nav Links (Mobile) */}
//       {isOpen && (
//         <div className="md:hidden mt-4">
//           <a href="#" className="block text-white py-2 hover:bg-gray-700">
//             Home
//           </a>
//           <a href="#" className="block text-white py-2 hover:bg-gray-700">
//             About
//           </a>
//           <a href="#" className="block text-white py-2 hover:bg-gray-700">
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-white text-2xl font-bold font-serif"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Urban Phlick Studio
        </motion.div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Nav Links (Desktop) */}
        <motion.div
          className="hidden md:flex space-x-28 mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["Home", "About", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="text-white hover:text-gray-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Collapsible Nav Links (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {["Home", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="block text-white py-2 hover:bg-gray-700"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
