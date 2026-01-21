"use client";
import { Navbar } from "@heroui/navbar";

import { useGlossary } from "@/hooks/useGlossary";

import NavItem from "./NavItem";

export default function SiteNavbar() {
  const { getGlossary } = useGlossary()
  const glossary = getGlossary()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar
      isBlurred
      position="sticky"
      maxWidth="xl"
      className="h-20 fixed top-0 z-50 backdrop-blur-md flex justify-between border-b border-primary-600/40 text-primary-600"
    >
      <button
        onClick={scrollToTop}
        className="relative font-primary text-xl tracking-widest hover:text-black cursor-pointer"
      >
        {glossary.hps}
      </button>

      <div className="hidden md:flex gap-6">
        <NavItem href="#about" label={glossary.about} />
        <NavItem href="#experience" label={glossary.experience} />
        <NavItem href="#services" label={glossary.services} />
        <NavItem href="#contact" label={glossary.contact} />
      </div>
    </Navbar>
  );
}
