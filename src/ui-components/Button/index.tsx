import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

export const Button: React.FC<ButtonProps> = ({ children, type="default", selected, onClick, className }) => {
    const selectedClass = selected ? 'selected' : '';
    return (
        <button 
            onClick={onClick}
            className={`btn btn-${type} ${selectedClass} ${className || ''} `}
        >
            {children}
        </button>
    )
};