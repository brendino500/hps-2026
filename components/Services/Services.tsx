import { useGlossary } from "@/hooks/useGlossary";

import Section from "@/ui/Section"
import Title from "@/ui/Title"
import ServiceCard from "./ServiceCard"

const Services = () => {
  const { getGlossary } = useGlossary()
  const glossary = getGlossary()

  return (
    <Section id={glossary.services}>
      <p className="text-secondary uppercase text-sm tracking-widest">What I do</p>
      <Title
        as="h2"
        text={glossary.services}
        className="text-4xl"
      />
      <ServiceCard />
    </Section>
  )
}

export default Services