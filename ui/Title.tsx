interface TitleProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const Title = ({ text, as: Component = "h1", className }: TitleProps) => {
  return (
    <Component className={`font-primary text-primary-500 py-6 ${className}`}>{text}</Component>
  )
}

export default Title