'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Property Owner',
    content: 'BOHRA Property helped me find my dream home. Their attention to detail and personalized service exceeded my expectations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Real Estate Investor',
    content: 'The team at BOHRA Property has been instrumental in my real estate investment journey. Their market expertise is unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Home Buyer',
    content: 'I was impressed by the professionalism and dedication of the BOHRA Property team. They made the home buying process seamless.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
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
            Client Testimonials
          </h2>
          <p className="text-accent-light max-w-2xl mx-auto">
            Hear what our clients have to say about their experience with BOHRA Property.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-light p-8 rounded-lg max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="rounded-full object-cover mb-4"
              />
              <p className="text-accent-light text-lg mb-6">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>
              <h4 className="text-xl font-serif text-accent">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-secondary">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-secondary hover:bg-secondary-light text-primary px-4 py-2 rounded-md transition-colors"
            >
              Previous
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-secondary hover:bg-secondary-light text-primary px-4 py-2 rounded-md transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 