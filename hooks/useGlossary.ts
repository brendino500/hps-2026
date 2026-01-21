import { glossary } from "@/data/glossary";
import type { Glossary } from "@/types/glossary";

export const useGlossary = () => {
  const getGlossary = (): Glossary => {
    return glossary;
  };

  return { getGlossary };
};
