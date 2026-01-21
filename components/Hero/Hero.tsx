'use client';
import { useGlossary } from "@/hooks/useGlossary";
import Title from "@/ui/Title";
import Section from "@/ui/Section";
import Button from "@/ui/Button";
import Image from "next/image";

const Hero = () => {
  const { getGlossary } = useGlossary();
  const glossary = getGlossary();

  return (
    <Section id="hero" className="relative border-b-4 border-primary-500 mt-20 pb-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="/heidi-hero.png"
          alt="heidi hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-end text-center min-h-[80vh] px-4 pb-20 lg:pb-30">
        <Title
          as="h1"
          text={glossary.heidiPhilipSmith}
          className="text-6xl md:text-7xl text-primary-500 mb-6 font-semi-bold"
        />
        <Button text={glossary.book} type="button" />
      </div>
    </Section>
  );
};

export default Hero;
