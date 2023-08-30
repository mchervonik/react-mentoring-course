import { Component, createElement } from 'react';

class Header extends Component {
    render() {
        return createElement('div', { className: 'App-header' },
            createElement('h1', { className: 'App-header-title' }, this.props.title)
        );
    }
}

export default Header;