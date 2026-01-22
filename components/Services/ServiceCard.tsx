'use client';
import Title from "@/ui/Title";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white/60 border border-primary-500/40 my-4 lg:max-w-54">
      <div className="p-4 flex flex-col items-start gap-4">
        <div className="p-2 bg-primary-400/40 text-primary-600">
          {icon}
        </div>
        <Title text={title} as="h3" className="text-2xl" />
        <p className="font-secondary pb-3">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
