import { useGlossary } from "@/hooks/useGlossary"

const Footer = () => {
  const { getGlossary } = useGlossary()
  const glossary = getGlossary()

  return (
    <div className="h-32 bg-primary-500 text-secondary-500">
      <div className="p-6 font-primary max-w-[1200px] md:px-20">
        <p>{glossary.copyrightYear} {glossary.heidiPhilipSmith}</p>
        <p>{glossary.madeBy}</p>
      </div>
    </div>
  )
}

export default Footer