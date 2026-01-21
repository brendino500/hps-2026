import Image from 'next/image';

import { useGlossary } from "@/hooks/useGlossary";
import { about } from '@/data/about'

import Section from '@/ui/Section';
import Title from '@/ui/Title';

const About = () => {
  const { getGlossary } = useGlossary()
  const glossary = getGlossary()

  const { description, footer } = about
  return (
    <Section id={glossary.about}>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col">
          <Title
            text={glossary.about}
            as="h2"
            className="text-4xl md:text-6xl mb-4"
          />
          <div className="flex flex-col justify-between h-full min-h-[400px]">
            <p className="font-secondary flex-grow">
              {description}
            </p>
            <div className="font-secondary grid grid-cols-2 gap-4 mt-auto">
              {footer.map(({ title, copy1, copy2 }, index) => (
                <div key={index}>
                  <p className="font-bold">{title}</p>
                  <p>{copy1}</p>
                  <p>{copy2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px]">
          <Image
            src="/heidi-1.jpg"
            alt="heidi"
            fill
            className="object-cover rounded-md object-top"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
