import './App.css';
import { Component, createElement } from 'react';
import Header from './components/Header'
import Module from './components/Module';
import { getModule1Content } from './content';

class App extends Component {
    render() {
        return createElement('div', { className: 'App' },
            createElement(Header, { title: 'React.js Mentoring Course'}),
            createElement(Module, {
                title: 'module 1: Core concepts',
                components: getModule1Content()
            }),
            createElement(Module, {
                title: 'module 2: Testing'
            }),
            createElement(Module, {
                title: 'module 3: Components'
            }),
            createElement(Module, {
                title: 'module 4: Advanced Components'
            }),
            createElement(Module, {
                title: 'module 5: Hooks'
            }),
            createElement(Module, {
                title: 'module 6: Routing'
            }),
            createElement(Module, {
                title: 'module 7: Forms'
            }),
            createElement(Module, {
                title: 'module 8: Server-Side Rendering (SSR)'
            }),
            createElement(Module, {
                title: 'module 9: Webpack'
            }),
            createElement(Module, {
                title: 'module 10: Redux'
            })
        );
    }
}

export default App;
