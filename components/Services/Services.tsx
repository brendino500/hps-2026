import Section from "@/ui/Section"
import Title from "@/ui/Title"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <Section id="services">
      <p className="text-secondary uppercase text-sm tracking-widest">What I do</p>
      <Title
        as="h2"
        text="Services"
        className="text-4xl"
      />
      <ServiceCard />
    </Section>
  )
}

export default Services