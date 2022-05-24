import './Button.scss';

const Button = (props: any) => {
  return (
    <button
      className={`button ${props.className} ${props.disabled && ' disabled'}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
