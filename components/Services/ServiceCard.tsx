'use client'
import { Coffee } from 'react-feather'
import Title from "@/ui/Title"

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white border border-primary-500/40 rounded-xs">
      <div className="inline-flex p-2 text-primary-600 bg-primary-400/40">
        <Coffee size={32} />
      </div>
      <div className="p-4">
        <Title
          text={title}
          as="h3"
          className="text-2xl"
        />
        <p className="font-secondary pb-3">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard