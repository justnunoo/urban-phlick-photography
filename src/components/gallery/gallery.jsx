// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import Image from 'next/image';
// // import ImageModal from '@/components/imageModal/ImageModal';
// // import { images } from '@/app/imageData';

// // const GalleryPage = () => {
// //   const [selectedImage, setSelectedImage] = useState(null);

// //   const openModal = (image) => {
// //     setSelectedImage(image);
// //   };

// //   const closeModal = () => {
// //     setSelectedImage(null);
// //   };

// //   const navigateImages = (direction) => {
// //     if (!selectedImage) return;

// //     const currentIndex = images.findIndex((img) => img.src === selectedImage.src);
// //     const newIndex = (currentIndex + direction + images.length) % images.length;
// //     setSelectedImage(images[newIndex]);
// //   };

// //   useEffect(() => {
// //     const handleKeyDown = (event) => {
// //       if (!selectedImage) return;

// //       if (event.key === "ArrowRight") navigateImages(1);
// //       if (event.key === "ArrowLeft") navigateImages(-1);
// //       if (event.key === "Escape") closeModal();
// //     };

// //     window.addEventListener("keydown", handleKeyDown);
// //     return () => window.removeEventListener("keydown", handleKeyDown);
// //   }, [selectedImage]);

// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5 bg-black p-2.5">
// //       {images.map((image, index) => (
// //         <div
// //           key={index}
// //           className="relative aspect-square cursor-pointer"
// //           onClick={() => openModal(image)}
// //         >
// //           <Image
// //             src={image.src}
// //             alt={image.alt}
// //             layout="fill"
// //             objectFit="cover"
// //             placeholder="blur"
// //             loading="lazy"
// //             className="rounded-xl"
// //           />
// //         </div>
// //       ))}
// //       {selectedImage && (
// //         <ImageModal
// //           src={selectedImage.src}
// //           alt={selectedImage.alt}
// //           onClose={closeModal}
// //           onNavigate={navigateImages}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default GalleryPage;



// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import ImageModal from '@/components/imageModal/ImageModal';
// import { images } from '@/app/imageData';
// import { motion, AnimatePresence } from 'framer-motion';

// const GalleryPage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = (image) => {
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   const navigateImages = (direction) => {
//     if (!selectedImage) return;

//     const currentIndex = images.findIndex((img) => img.src === selectedImage.src);
//     const newIndex = (currentIndex + direction + images.length) % images.length;
//     setSelectedImage(images[newIndex]);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (!selectedImage) return;

//       if (event.key === 'ArrowRight') navigateImages(1);
//       if (event.key === 'ArrowLeft') navigateImages(-1);
//       if (event.key === 'Escape') closeModal();
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [selectedImage]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5 bg-black p-2.5">
//       {images.map((image, index) => (
//         <motion.div
//           key={index}
//           className="relative aspect-square cursor-pointer"
//           onClick={() => openModal(image)}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//         >
//           <Image
//             src={image.src}
//             alt={image.alt}
//             layout="fill"
//             objectFit="cover"
//             placeholder="blur"
//             loading="lazy"
//             className="rounded-xl"
//           />
//         </motion.div>
//       ))}

//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             key="modal"
//             className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white p-4 rounded-lg shadow-lg"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <ImageModal
//                 src={selectedImage.src}
//                 alt={selectedImage.alt}
//                 onClose={closeModal}
//                 onNavigate={navigateImages}
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default GalleryPage;




'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ImageModal from '@/components/imageModal/ImageModal';
import { images } from '@/app/imageData';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImages = (direction) => {
    if (!selectedImage) return;

    const currentIndex = images.findIndex((img) => img.src === selectedImage.src);
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === 'ArrowRight') navigateImages(1);
      if (event.key === 'ArrowLeft') navigateImages(-1);
      if (event.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5 bg-black p-2.5">
      {images.map((image, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

        return (
          <motion.div
            ref={ref}
            key={index}
            className="relative aspect-square cursor-pointer"
            onClick={() => openModal(image)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              loading="lazy"
              className="rounded-xl"
            />
          </motion.div>
        );
      })}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-4 rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ImageModal
                src={selectedImage.src}
                alt={selectedImage.alt}
                onClose={closeModal}
                onNavigate={navigateImages}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
