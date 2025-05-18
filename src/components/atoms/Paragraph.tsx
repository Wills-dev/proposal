interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <p className={`text-lg md:text-xl text-white ${className || ""}`}>
    {children}
  </p>
);

export default Paragraph;
