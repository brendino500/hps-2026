import Title from "@/ui/Title"
import Section from "@/ui/Section"
import Button from "@/ui/Button"

const Hero = () => {
  return (
    <Section id="hero">
      <Title as="h1" text="Heidi Philip-Smith" className="text-7xl" />
      <Button text="book" type="button" />
    </Section>
  )
}

export default Hero