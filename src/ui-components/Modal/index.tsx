import React from 'react';
import { ModalProps } from './interface';
import ReactDOM from 'react-dom';
import './style.css';

export class Modal extends React.Component<ModalProps> {
    root: HTMLDivElement;
    el: HTMLDivElement;
    constructor(props: ModalProps) {
        super(props);

        this.root = document.querySelector("#root") as HTMLDivElement;
        this.el = document.createElement('div');
    }

    componentDidMount() {
        this.root.appendChild(this.el);
    }

    componentWillUnmount() {
        this.root.removeChild(this.el);
    }

    removeOnClickPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    }

    onClickOutsideModalBody = () => {
        const { onClickOutsideModalBody } = this.props;

        onClickOutsideModalBody && onClickOutsideModalBody();
    }

    render() {
        const { show = true, modalBodyClassName } = this.props;
        return show ? ReactDOM.createPortal(
            <div onClick={this.removeOnClickPropagation} className="modal-container">
                <div onClick={this.onClickOutsideModalBody} className="modal-overlay" />
                <div className={`modal-body ${modalBodyClassName || ''}`}>
                    {this.props.children}
                </div>
            </div>,
            this.el
        ) : null;
    }
}