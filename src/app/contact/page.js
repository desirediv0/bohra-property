'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
            alt="Contact Us"
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
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-accent-light mb-8 max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our properties
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-accent mb-6">Get in Touch</h2>
              <p className="text-accent-light mb-8">
                Have questions about our properties? We are here to help. Fill out the form and we will get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif text-accent mb-2">Address</h3>
                  <p className="text-accent-light">SCO 63, 1st Floor, OLD Judicial Complex, Civil Line, Sector-15, Part-1, Gurugram</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-accent mb-2">Helpline Number</h3>
                  <p className="text-accent-light">+91 9990859732</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-accent mb-2">Phone</h3>
                  <p className="text-accent-light">+91 9999913030</p>
                  <p className="text-accent-light">+91 9990859732</p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-accent mb-2">Email</h3>
                  <p className="text-accent-light">bohraproperty360@gmail.com</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-accent mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-primary border border-accent-light text-accent focus:outline-none focus:border-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-accent mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-primary border border-accent-light text-accent focus:outline-none focus:border-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-accent mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-primary border border-accent-light text-accent focus:outline-none focus:border-secondary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-accent mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded-md bg-primary border border-accent-light text-accent focus:outline-none focus:border-secondary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-primary px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="py-20 px-4 bg-primary">
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
      </section> */}

      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      {/* <CTA /> */}
      <Footer />
    </main>
  )
} 