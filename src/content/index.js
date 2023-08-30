import { createElement } from 'react';
import Counter from '../components/Counter';
import SearchForm from '../components/SearchForm';
import GenreList from '../components/GenreList';
import genreListData from '../data/genreList.json';

const logValue = (val) => console.log(val);

export function getModule1Content() {
    return [
        createElement(Counter, { initValue: 3 }),
        createElement(SearchForm, { initSearch: 'Movie', onSearch: logValue }),
        createElement(
            GenreList,
            {
                title: 'Movie Genres (see Console)',
                genreList: genreListData,
                onSelect: logValue
            }
        )
    ]
};