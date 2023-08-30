import { Component, createElement } from 'react';

class GenreItem extends Component {

    handleSelect() {
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(this.props.genreName);
        }
    }

    render() {
        return createElement(
            'li',
            {
                id: this.props.genreName,
                key: this.props.genreName,
                className: 'App-genre-item'

            },
            createElement(
                'button',
                {
                    className: this.props.selected === this.props.genreName
                        ? 'btn btn-primary'
                        : 'btn btn-outline-info',
                    onClick: this.handleSelect.bind(this)
                },
                this.props.genreName
            )
        );
    }
}

export default GenreItem;