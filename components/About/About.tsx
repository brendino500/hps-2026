import Image from 'next/image';
import Section from '@/ui/Section';
import Title from '@/ui/Title';

const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col">
          <Title text="About" as="h2" className="text-4xl md:text-6xl mb-4" />
          <p className="font-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar odio quis eros euismod pharetra...
          </p>
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
