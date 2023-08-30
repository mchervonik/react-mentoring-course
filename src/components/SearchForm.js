import { Component, createElement } from 'react';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSearch: this.props.initSearch
        }
    }

    setCurrentSearch(value) {
        this.setState(() => ({ currentSearch: value }));
    }

    handleSearch() {
        if (typeof this.props.onSearch === 'function') {
            this.props.onSearch(`The search query is: "${this.state.currentSearch}"`);
        }
    }

    render() {
        return createElement('div', { className: 'App-task' },
            createElement('div', {className: 'App-task-header' },
                createElement('h6', {className: 'App-task-title' }, 'SearchForm (see Console)'),
            ),
            createElement(
                'div',
                { className: 'App-task-content input-group mb-3' },
                createElement(
                    'input',
                    {
                        className: 'form-control',
                        type: 'text',
                        defaultValue: this.props.initSearch,
                        onChange: (e) => this.setCurrentSearch(e.target.value),
                        onKeyDown: (e) => {
                            if (e.key === 'Enter' && e.target.value) {
                                this.handleSearch()
                            }
                        }
                    }
                ),
                createElement(
                    'button',
                    {
                        className: 'btn btn-outline-info',
                        type: 'button',
                        onClick: () => {
                            if (this.state.currentSearch) {
                                this.handleSearch();
                            }
                        }
                    },
                    'Search'
                )
            )
        );
    }
}

export default SearchForm;