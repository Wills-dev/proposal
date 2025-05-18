import Button from "../atoms/Button";

interface ButtonGroupProps {
  onButtonClick: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onButtonClick }) => (
  <div className="flex justify-center space-x-4 mt-6">
    <Button onClick={onButtonClick}>Yes</Button>
    <Button onClick={onButtonClick}>Yes</Button>
  </div>
);

export default ButtonGroup;
