import React from 'react';
import { Link } from 'react-router-dom';
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
    if (href.startsWith('/')) {
      // Use Link for internal routes
      return (
        <Link to={href} className={buttonClass} {...props}>
          {children}
        </Link>
      );
    }
    // Use anchor tag for external links or hash links
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
