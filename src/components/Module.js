import { Component, createElement } from 'react';

class Module extends Component {
    constructor(props) {
        super(props);
        this.components = this.props.components ? this.props.components : [];
    }
    render() {
        return createElement('div', { className: `App-module ${this.components.length ? 'active': ''}` },
            createElement('h3', { className: 'App-module-title' }, this.props.title),
            createElement('div', { className: 'App-module-content' }, ...this.components)
        );
    }
}

export default Module;