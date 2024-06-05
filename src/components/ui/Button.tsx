import React from 'react';
import ButtonSvg from '~/assets/svg/ButtonSvg';
import { cn } from "~/lib/utils"

interface ButtonProps {
    className?: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    white?: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({
    className,
    href,
    onClick,
    children,
    white = false,
  }) => {
    const classNames = cn('rounded-md button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7',white && "text-white",className)
    const spanClasses = 'relative z-10';
  
    const renderButton = () => (
      <button className={classNames} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        <ButtonSvg white={white} />
      </button>
    );
  
    const renderLink = () => (
      <a href={href} className={classNames}>
        <span className={spanClasses}>{children}</span>
        <ButtonSvg white={white} />
      </a>
    );
  
    return href ? renderLink() : renderButton();
  };
  
  export default Button;