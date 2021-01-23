import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

export const Button: React.FC<ButtonProps> = ({ children, type="default", selected, onClick, className, style }) => {
    const selectedClass = selected ? 'selected' : '';
    return (
        <button
            style={style}
            onClick={onClick}
            className={`btn btn-${type} ${selectedClass} ${className || ''} `}
        >
            {children}
        </button>
    )
};