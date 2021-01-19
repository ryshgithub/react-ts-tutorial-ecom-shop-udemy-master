import React from 'react';
import { CheckboxProps, CheckboxState } from './interface';
import './style.css';

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    constructor(props: CheckboxProps) {
        super(props);
        this.state = {
            value: props.initialValue || false,
        }
    }

    handleCheckboxClick = () => {
        const newValue = !this.state.value;
        this.setState({ value: newValue });

        this.props.onChange(newValue);
    }

    render() {
        const { value } = this.state;
        const iconClassName = value ? 'fa fa-check-square' : 'fa fa-square-o'

        return (
            <label className="checkbox-container" onClick={this.handleCheckboxClick}>
                <i className={`${iconClassName} checkbox-icon`} aria-hidden="true"></i>
                <span className="checkbox-children">{this.props.children}</span>
            </label>
        );
    }
}

export default Checkbox;