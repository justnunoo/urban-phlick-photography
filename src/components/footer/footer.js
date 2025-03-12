import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10" id='contact'>
      <div className="container mx-auto px-4">
        {/* Quick Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#home" className="hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <Link href="#gallery" className="hover:text-yellow-400 transition-colors">
            Gallery
          </Link>
          <Link href="#about" className="hover:text-yellow-400 transition-colors">
            About
          </Link>
          <Link href="#booking" className="hover:text-yellow-400 transition-colors">
            Book Now
          </Link>
          <Link href="#contact" className="hover:text-yellow-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Social Media Handles */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://pinterest.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Pinterest"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-6">
          <p className="mb-2">
            Email:{' '}
            <a
              href="mailto:your.email@example.com"
              className="hover:text-yellow-400 transition-colors"
            >
              your.email@example.com
            </a>
          </p>
          <p className="mb-2">
            Phone:{' '}
            <a
              href="tel:+1234567890"
              className="hover:text-yellow-400 transition-colors"
            >
              +1 (234) 567-890
            </a>
          </p>
          <p>Address: 123 Photography Lane, City, Country</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2023 Your Photography. All rights reserved.</p>
          <p>Designed with ❤️ by You</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;