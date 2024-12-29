type ButtonProps = {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
};
const Button = ({
  title,
  children,
  onClick,
  type,
  className,
}: ButtonProps) => {
  
  return (
    <button
      className={`flex items-center justify-center px-4 py-1 rounded-md ${className}`}
      onClick={onClick}
      type={type || "button"}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
