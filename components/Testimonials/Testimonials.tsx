'use client'

import Section from "@/ui/Section"
import Title from "@/ui/Title";
import TestimonialCarousel from "./TestimonialCarousel";

import { useGlossary } from "@/hooks/useGlossary";
const Testimonials = () => {

  const { getGlossary } = useGlossary()
  const glossary = getGlossary()

  return (
    <Section id={glossary.testimonials} className="h-full">
      <Title
        as="h2"
        text={glossary.testimonials}
        className="text-4xl md:text-6xl"
      />
      <div className="h-full items-center justify-center py-20">
        <TestimonialCarousel />
      </div>
    </Section>
  )
}

export default Testimonials