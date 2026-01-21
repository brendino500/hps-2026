import { useGlossary } from "@/hooks/useGlossary";

import Title from "@/ui/Title"
import Section from "@/ui/Section"
import Button from "@/ui/Button"
import Image from "next/image"

const Hero = () => {
  const { getGlossary } = useGlossary()
  const glossary = getGlossary()

  return (
    <Section
      id="hero"
      className="border-b-4 border-primary-500 mt-20"
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-col z-10 lg:static absolute inset-0 lg:inset-auto items-center justify-center text-center">
          <Title
            as="h1"
            text={glossary.heidiPhilipSmith}
            className="text-7xl md:text-8xl"
          />
          <Button text={glossary.book} type="button" />
        </div>
        <div className="relative w-[400px] h-[400px] md:h-[600px] md:w-[600px]">
          <Image
            src="/heidi-hero.png"
            alt="heidi hero"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  )
}

export default Hero