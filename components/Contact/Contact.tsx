'use client';

import { Form } from "@heroui/form";
import { Textarea, Input } from "@heroui/input"
// import { Input } from "@heroui/react";

import { useGlossary } from '@/hooks/useGlossary'

import Section from "@/ui/Section";
import Title from "@/ui/Title";
import Button from "@/ui/Button";

const Contact = () => {
  const { getGlossary } = useGlossary()
  const glossary = getGlossary()

  return (
    <Section id="contact">
      <form>
        <Input
          isRequired
          className="max-w-xs"
          defaultValue="junior@heroui.com"
          label="Email"
          type="email"
          labelPlacement="outside"
        />
      </form>
    </Section>
  )

  return (
    <Section id="contact" className="mt-20">
      <div className="max-w-xl mx-auto">
        <Title
          text="Get in Touch"
          as="h2"
          className="text-4xl md:text-6xl mb-8 text-center"
        />

        <Form className="flex flex-col gap-6">
          <div className="flex flex-col">
            {/* <label htmlFor="name" className="font-secondary mb-2">
              {glossary.name}
            </label> */}
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              className="border border-primary-500/40 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-secondary mb-2">
              {glossary.email}
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="border border-primary-500/40 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-secondary mb-2">
              {glossary.message}
            </label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              className="border border-primary-500/40 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          <Button text="Submit" type="submit" className="w-full md:w-auto" />
        </Form>
      </div>
    </Section>
  );
};

export default Contact;
