'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Properties', href: '/properties' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577071472468' },
  // { name: 'Twitter', href: '#' },
  { name: 'Instagram', href: 'https://www.instagram.com/bohra_property/' },
  // { name: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-accent">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-serif text-secondary">
              <Image src="/logo1.png" alt="Logo" width={70} height={70} className="mr-2" />
            </Link>
            <p className="text-accent-light">
              Your trusted partner in luxury real estate. We bring you the finest properties in prime locations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-accent-light hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif text-accent mb-4">Contact Us</h4>
            <ul className="space-y-2 text-accent-light">
              <li>SCO 63, 1st Floor, OLD Judicial Complex, Civil Line, Sector-15, Part-1, Gurugram</li>
              <li>Phone: +91 9999913030</li>
              <li>+91 9990859732</li>
              <li>Email: bohraproperty360@gmail.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-serif text-accent mb-4">Follow Us</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-accent-light hover:text-secondary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary/20 text-center text-accent-light">
          <p>&copy; {new Date().getFullYear()} BOHRA Property Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 