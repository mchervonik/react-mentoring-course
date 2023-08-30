import { Component, createElement } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.initValue
        }
    }

    setCounter(value) {
        this.setState(prev => ({counter: prev.counter + value}))
    }

    render() {
        return createElement('div', { className: 'App-task' },
            createElement('div', {className: 'App-task-header' },
                createElement('h6', {className: 'App-task-title' }, 'Counter')
            ),
            createElement('div', {className: 'App-task-content' },
                createElement(
                    'button',
                    {
                        className: 'App-btn btn btn-info btn-sm',
                        onClick: () => this.setCounter(1)
                    },
                    '+'
                ),
                createElement('p',{ className: 'App-counter-label' }, this.state.counter),
                createElement(
                    'button',
                    {
                        className: 'App-btn btn btn-info btn-sm',
                        onClick: () => this.setCounter(-1)
                    },
                    '-'
                ),
            ),
        );
    }
}

export default Counter;