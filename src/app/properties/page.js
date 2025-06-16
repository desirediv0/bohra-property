'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import { motion } from 'framer-motion'
import Image from 'next/image'

const properties = [
  {
    id: 1,
    name: 'Reach 3',
    price: '₹ 1.25 cr',
    squareFeet: '335 - 4865',
    location: 'Sector 70, Gurgaon',
    category: 'commercial',
    image: '/images/commercial-1.png',
  },
  {
    id: 2,
    name: 'M3M Jewel MG Road',
    price: '₹ 2 cr',
    squareFeet: '300 - 1500',
    location: 'MG Road, Gurgaon',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
  },
  {
    id: 3,
    name: 'Omaxe 19B',
    price: '₹ 50 Lakh',
    squareFeet: '400 - 500',
    location: 'Dwarka, New Delhi',
    category: 'commercial',
    image: '/images/commercial-3.png',
  },
  {
    id: 4,
    name: 'Trump Towers',
    price: '₹ 8.50 cr',
    squareFeet: '3,525 - 6050',
    location: 'Delhi',
    category: 'residential',
    image: '/images/residential-1.png',
  },
  {
    id: 5,
    name: 'Trinity Sky Palazzo',
    price: '₹ 4.7 cr',
    squareFeet: '4,000 - 4,200',
    location: 'Sector 88, Gurgaon',
    category: 'residential',
    image: '/images/residential-2.png',
  },
  {
    id: 6,
    name: 'Shapoorji Pallonji The Dualis',
    price: '₹ 5.50 cr',
    squareFeet: '19,249',
    location: 'Sector 46, Gurgaon',
    category: 'residential',
    image: '/images/residential-3.png',
  },
  {
    id: 7,
    name: 'Reach The Bazaria',
    price: '₹ 10.5 cr',
    squareFeet: '2,754',
    location: 'Sector 68, Gurgaon',
    category: 'shop-office',
    image: '/images/shop-office-1.png',
  },
  {
    id: 8,
    name: 'Reach Buzz 114',
    price: '₹ 5.50 cr',
    squareFeet: '2,754',
    location: 'Sector 114, Gurgaon',
    category: 'shop-office',
    image: '/images/shop-office-2.png',
  },
  {
    id: 9,
    name: 'Microtek Grandfront',
    price: '₹ 10.4 cr',
    squareFeet: '2,754',
    location: 'Sector 81, Gurgaon',
    category: 'shop-office',
    image: '/images/shop-office-3.png',
  },
]

export default function Properties() {
  const categories = {
    residential: properties.filter(property => property.category === 'residential'),
    commercial: properties.filter(property => property.category === 'commercial'),
    'shop-office': properties.filter(property => property.category === 'shop-office'),
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Properties"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-accent mb-4">
            Our Properties
          </h1>
          <p className="text-lg md:text-xl text-accent-light mb-8 max-w-2xl mx-auto">
            Discover our exclusive collection of premium properties
          </p>
        </motion.div>
      </section>

      {/* Properties Sections */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          {/* Residential Properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-accent mb-8 text-center">
              Residential Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.residential.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-serif text-accent">{property.name}</h3>
                        <p className="text-secondary text-lg mt-1">{property.price}</p>
                      </div>
                      <a
                        href="/contact"
                        className="inline-block bg-secondary hover:bg-secondary-light text-primary px-4 py-2 rounded-md font-medium transition-colors text-sm"
                      >
                        Contact Us
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-primary-light rounded-lg">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-accent-light text-sm">Location</p>
                          <p className="text-accent">{property.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <div>
                          <p className="text-accent-light text-sm">Area</p>
                          <p className="text-accent">{property.squareFeet} sq ft</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Commercial Properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-accent mb-8 text-center">
              Commercial Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.commercial.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-serif text-accent">{property.name}</h3>
                        <p className="text-secondary text-lg mt-1">{property.price}</p>
                      </div>
                      <a
                        href="/contact"
                        className="inline-block bg-secondary hover:bg-secondary-light text-primary px-4 py-2 rounded-md font-medium transition-colors text-sm"
                      >
                        Contact Us
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-primary-light rounded-lg">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-accent-light text-sm">Location</p>
                          <p className="text-accent">{property.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <div>
                          <p className="text-accent-light text-sm">Area</p>
                          <p className="text-accent">{property.squareFeet} sq ft</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Shop/Office Properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-accent mb-8 text-center">
              Shop & Office Spaces
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories['shop-office'].map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-serif text-accent">{property.name}</h3>
                        <p className="text-secondary text-lg mt-1">{property.price}</p>
                      </div>
                      <a
                        href="/contact"
                        className="inline-block bg-secondary hover:bg-secondary-light text-primary px-4 py-2 rounded-md font-medium transition-colors text-sm"
                      >
                        Contact Us
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 bg-primary-light rounded-lg">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="text-accent-light text-sm">Location</p>
                          <p className="text-accent">{property.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <div>
                          <p className="text-accent-light text-sm">Area</p>
                          <p className="text-accent">{property.squareFeet} sq ft</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-accent mb-4">
              Why Choose Us
            </h2>
            <p className="text-accent-light max-w-2xl mx-auto">
              We stand out from the competition with our commitment to excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Guidance',
                description: 'Our team of experienced real estate professionals provides personalized guidance throughout your property journey.',
              },
              {
                title: 'Premium Properties',
                description: 'We curate only the finest properties that meet our high standards of quality and luxury.',
              },
              {
                title: 'Client Satisfaction',
                description: 'Your satisfaction is our priority. We work tirelessly to exceed your expectations.',
              },
              {
                title: 'Market Expertise',
                description: 'With years of experience, we have deep insights into the real estate market trends and opportunities.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-serif text-accent mb-3">{feature.title}</h3>
                <p className="text-accent-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
} 