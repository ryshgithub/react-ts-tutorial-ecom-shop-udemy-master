import React from 'react';
import { InputProps } from './interface';
import './style.css';

export const Input: React.FC<InputProps> = ({ onChange, error, positive, inputStyle, inputContainerStyle, label, inputRef }) => {
    const overrideClassName = (error && 'error-ui') || (positive && 'positive-ui') || '';

    return (
        <div style={inputContainerStyle} className="input-container">
            <div className="label">{label}</div>
            <input ref={inputRef} style={inputStyle} onChange={onChange} className={overrideClassName} />
            { error && <div className="error-message">{error}</div> }
        </div>
    )
}