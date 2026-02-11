"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { testimonials, Testimonial } from "@/data/testimonials";
import IconButton from "@/ui/IconButton";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current: Testimonial = testimonials[currentIndex];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="px-16 text-center h-[770px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {current.quote.map((paragraph, idx) => (
              <p key={idx} className="text-lg italic font-secondary mb-4">
                {paragraph}
              </p>
            ))}
            <div className="mt-4">
              <p className="font-semibold font-primary text-xl">{current.name}</p>
              <p className="text-sm text-gray-500 font-secondary">{current.role}</p>
              {current.logo && (
                <div className="mt-3 flex justify-center">
                  <img
                    src={current.logo}
                    alt={`${current.name} logo`}
                    className="h-8 object-contain"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-y-0 left-0 flex items-center">
        <IconButton
          icon={ChevronLeft}
          ariaLabel="Previous testimonial"
          onClick={prev}
          className="ml-2"
        />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <IconButton
          icon={ChevronRight}
          ariaLabel="Next testimonial"
          onClick={next}
          className="mr-2"
        />
      </div>
    </div>

  );
}
