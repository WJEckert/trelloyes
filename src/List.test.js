import List from './List.js';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import store from './STORE.js';

it('renders without crashing', () => {
    const div = document.createElement('section');
    ReactDOM.render(<List cards = {[]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
    .create(<List key = {store.allCards.id} header="List header" cards={['a']}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });