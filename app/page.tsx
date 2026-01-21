import Image from "next/image";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About"
import Divider from "@/ui/Divider";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
