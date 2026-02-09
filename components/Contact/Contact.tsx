'use client';

import Section from "@/ui/Section";
import Title from "@/ui/Title";
import Button from "@/ui/Button";
import FloatingInput from "@/ui/FloatingInput";

import { useGlossary } from '@/hooks/useGlossary';

const Contact = () => {
  const { getGlossary } = useGlossary();
  const glossary = getGlossary();

  return (
    <Section id="contact" className="mt-20">
      <div className="max-w-xl mx-auto">
        <Title
          text="Get in Touch"
          as="h2"
          className="text-4xl md:text-6xl mb-8 text-center"
        />

        <form className="flex flex-col gap-6">
          <FloatingInput
            id="name"
            type="text"
            label={`${glossary.name} *`}
            required
            placeholder="Your name"
            as="input"
          />

          <FloatingInput
            id="email"
            type="text"
            label={`${glossary.email} *`}
            required
            placeholder="Your email"
            as="input"
          />

          <FloatingInput
            id="message"
            label="Message"
            required
            placeholder={`${glossary.message} *`}
            as="textarea"
            rows={5}
          />

          <Button text="Submit" type="submit" className="w-full md:w-auto" />
        </form>
      </div>
    </Section>
  );
};

export default Contact;
