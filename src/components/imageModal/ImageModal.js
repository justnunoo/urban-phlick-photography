import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ImageModal.module.css';

const ImageModal = ({ src, alt, onClose, onNavigate }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} ref={modalRef}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <span className={styles.prev} onClick={() => onNavigate(-1)}>&#10094;</span>
        <span className={styles.next} onClick={() => onNavigate(1)}>&#10095;</span>
        <div className={styles.imageContainer}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;