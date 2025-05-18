interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
  >
    {children}
  </button>
);
export default Button;
