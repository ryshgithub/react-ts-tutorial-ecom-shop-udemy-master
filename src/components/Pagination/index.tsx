import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Button } from '../../ui-components/Button';
import { PaginationProps, PaginationState } from './interface';
import './style.css';

class Pagination extends React.Component<PaginationProps, PaginationState> {
    constructor(props: PaginationProps) {
        super(props);

        this.state = {
            selectedPage: 1
        }
    }

    currentSelectedPage = () => {
        const { overrideSelectedPage } = this.props;
        const { selectedPage } = this.state;

        return overrideSelectedPage || selectedPage;
    }

    handleLeftCaretClick = () => {

        const currentSelectedPage = this.currentSelectedPage();

        const newPage = currentSelectedPage === 1 ? currentSelectedPage : currentSelectedPage - 1;

        this.setState({ selectedPage: newPage });
        this.props.onChange(newPage);
    }

    handleRightCaretClick = () => {
        const { numberOfPages, onChange } = this.props;

        const currentSelectedPage = this.currentSelectedPage();

        const newPage = currentSelectedPage === numberOfPages ? currentSelectedPage : currentSelectedPage + 1;

        this.setState({ selectedPage: newPage });
        onChange(newPage);
    }

    pageClick = (page: number) => () => {
        const { selectedPage } = this.state;

        if(selectedPage !== page) {
            this.setState({ selectedPage: page });
            this.props.onChange(page);
        }
    }

    renderPageButtons = () => {
        const { numberOfPages } = this.props;

        const currentSelectedPage = this.currentSelectedPage();

        return [...new Array(numberOfPages)].map((value, index) => {
            const page = index + 1;

            return (
                <Button
                    key={page}
                    selected={currentSelectedPage === page}
                    onClick={this.pageClick(page)}
                    className="page-button"
                >
                    {page}
                </Button>
            )
        })
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className={`pagination-container ${theme}`}>
                        <i onClick={this.handleLeftCaretClick} className="fa fa-caret-left page-caret" aria-hidden="true"></i>
                        <div className="pages-container">
                            {this.renderPageButtons()}
                        </div>
                        <i onClick={this.handleRightCaretClick} className="fa fa-caret-right page-caret" aria-hidden="true"></i>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Pagination;