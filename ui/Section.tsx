'use client';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <section
      id={id}
      className={`w-full flex items-center justify-center py-12  ${className}`}
    >
      <div className="max-w-[1200px] w-full md:px-20 px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
