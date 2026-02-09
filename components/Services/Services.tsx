'use client';
import { Card, CardFooter, Image, Button } from "@heroui/react";
import { useGlossary } from "@/hooks/useGlossary";
import { services } from '@/data/services'

import Section from "@/ui/Section"
import Title from "@/ui/Title"
import ServiceCard from "./ServiceCard"

const Services = () => {
  const { getGlossary } = useGlossary()
  const glossary = getGlossary()

  const { whatIDo, typesOfServices } = services

  return (
    <Section id={glossary.services}>
      <p className="text-black uppercase text-sm tracking-widest">{whatIDo}</p>
      <Title
        as="h2"
        text={glossary.services}
        className="text-4xl"
      />
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4">
        {typesOfServices.map(({ title, description, icon }, index) => (
          <ServiceCard
            key={index}
            title={title}
            description={description}
            icon={icon} />
        ))}
      </div>
    </Section>
  )
}

export default Services