import { Component, createElement } from 'react';
import GenreItem from './GenreItem';

class GenreList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props?.genreList[0]
        }
    }

    handleSelect(genreName) {
        this.setState(() => ({ selected: genreName }));
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(`The chosen genre is: "${genreName}"`);
        }
    }

    createGenreItems() {
        return this.props.genreList.map(
            item => createElement(
                GenreItem,
                {
                    genreName: item,
                    selected: this.state.selected,
                    onSelect: this.handleSelect.bind(this)
                }
            )
        );
    }

    render() {
        return createElement('div', { className: 'App-task' },
            createElement('div', { className: 'App-task-header'},
                createElement('h6', { className: 'App-genres-list-title' }, this.props.title),
            ),
            createElement(
                'ul',
                { className: 'App-genres-list' },
                ...this.createGenreItems()
            )
        );
    }
}

export default GenreList;