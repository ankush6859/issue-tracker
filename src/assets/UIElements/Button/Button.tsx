import './Button.scss';

interface ButtonProps {
  className: string;
  disabled?: boolean;
  type?: any;
  children: JSX.Element | string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  type,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`button ${className} ${disabled && ' disabled'}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
