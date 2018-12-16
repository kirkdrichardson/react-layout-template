// @flow strict

import * as React from 'react';


class NoMatchingRoute extends React.Component<RouterProps> {
    render() {
        return (
            <div>
                No route matching "{this.props.location.pathname}"
            </div>
        );
    }
}

export default NoMatchingRoute;