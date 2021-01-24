import React from 'react';
import { ButtonProps } from './interface';
import './style.css';

export const Button: React.FC<ButtonProps> = ({ children, type="default", selected, onClick, className, style, disabled }) => {
    const selectedClass = selected ? 'selected' : '';
    const disabledClass = disabled ? 'disabled' : '';

    return (
        <button
            style={style}
            onClick={onClick}
            className={`btn btn-${type} ${selectedClass} ${disabledClass} ${className || ''} `}
            disabled={disabled}
        >
            {children}
        </button>
    )
};