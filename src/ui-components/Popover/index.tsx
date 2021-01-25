import React from 'react';
import ReactDOM from 'react-dom';
import { PopoverProps, PopoverState } from './interface';
import './style.css';

class Popover extends React.Component<PopoverProps, PopoverState> {
    root: HTMLDivElement;
    el: HTMLDivElement;
    childrenRef: React.RefObject<HTMLElement>;
    popperRef: React.RefObject<HTMLDivElement>;

    constructor(props: PopoverProps) {
        super(props);

        this.root = document.querySelector('#root') as HTMLDivElement;
        this.el = document.createElement('div');
        this.childrenRef = React.createRef();
        this.popperRef = React.createRef();

        this.state = {
            show: false,
            childrenPosition: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            contentWidth: 0
        }
    }

    componentDidMount() {
        this.root.appendChild(this.el);

        setTimeout(() => {
            const childrenElement = this.childrenRef.current;

            if(childrenElement) {
                const { top, left, right, bottom } = childrenElement.getBoundingClientRect();

                this.setState({
                    childrenPosition: {
                        top,
                        left,
                        bottom,
                        right,
                    }
                })
            }
        }, 500)
    }

    componentWillUnmount() {
        this.root.removeChild(this.el);
    }

    renderChildElement = () => {
        return React.cloneElement(this.props.children as React.ReactElement, { ref: this.childrenRef, onClick: this.handleContentClick });
    }

    getShowValue = () => {
        const { controlShow } = this.props;
        const { show } = this.state;
        
        return controlShow === undefined ? show : controlShow;
    }

    handleContentClick = () => {
        const { controlShow, onClick } = this.props;
        controlShow === undefined && this.setState({ show: !this.state.show });
        
        onClick && onClick();
    }

    renderPopover = () => {
        const { content, position, popoverBodyClassName } = this.props;
        const { childrenPosition, contentWidth } = this.state;
        let style: React.CSSProperties;

        switch(position) {
            case 'bottomleft':
                style = {
                    top: childrenPosition.bottom,
                    left: childrenPosition.right - contentWidth
                };
                break;
            case 'bottomright':
                style = {
                    top: childrenPosition.bottom,
                    left: childrenPosition.left
                };
                break;
        }

        return this.getShowValue() ? ReactDOM.createPortal(
            <div
                style={style}
                className="popover-content-container"
                ref={this.popperRef}
            >
                <div className={`popover-body ${popoverBodyClassName || ''}`}>
                    {content}
                </div>
            </div>,
            this.el
        ) : null;
    }

    componentDidUpdate(prevProps: PopoverProps, prevState: PopoverState) {
        const { contentWidth } = this.state;
        const popperWidth = this.popperRef.current ?
            this.popperRef.current.getBoundingClientRect().width : 0;

        if((!contentWidth || popperWidth !== contentWidth) && this.getShowValue()) {
            this.setState({
                contentWidth: popperWidth
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderChildElement()}
                {this.renderPopover()}
            </React.Fragment>
        );
    }
}

export default Popover;