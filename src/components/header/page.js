import Link from "next/link";
import "./header.css"
import Image from "next/image";

export default function Header() {
    return (
        <nav className="navbar fixed navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <img
            src="/globe.svg" // Replace with your logo file in the public folder
            alt="Logo"
            style={{ width: '50px', height: '50px' }}
          />
        </Link>

        {/* Collapsible Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}