import React from 'react';
import styles from './CTAButton.module.css';

export function CTAButton({ 
  children, 
  variant = 'primary', 
  className = '', 
  href, 
  onClick,
  type = 'button',
  ...props 
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
