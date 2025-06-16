'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
            alt="About BOHRA Property"
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
            About BOHRA Property
          </h1>
          <p className="text-lg md:text-xl text-accent-light mb-8 max-w-2xl mx-auto">
            Your trusted partner in real estate since 2010
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-accent mb-4">
              Our Story
            </h2>
            <p className="text-accent-light max-w-3xl mx-auto">
              Founded in 2010, BOHRA Property has grown to become one of the most trusted names in real estate. 
              Our journey began with a simple mission: to help people find their perfect homes and make their 
              real estate dreams come true.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Our Office"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif text-accent">Our Mission</h3>
              <p className="text-accent-light">
                We strive to provide exceptional real estate services while maintaining the highest standards 
                of professionalism and integrity. Our goal is to make the property buying and selling process 
                as smooth and enjoyable as possible for our clients.
              </p>
              <h3 className="text-2xl font-serif text-accent">Our Vision</h3>
              <p className="text-accent-light">
                To be the leading real estate company known for our commitment to excellence, innovation, 
                and customer satisfaction. We aim to transform the real estate experience through our 
                dedication to quality and service.
              </p>
            </motion.div>
          </div>
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