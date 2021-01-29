import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ROUTE } from '../../constants/route';

class HandleAllError extends React.Component<RouteComponentProps> {
    componentDidCatch() {
        this.props.history.push(ROUTE.ERROR);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default withRouter(HandleAllError);