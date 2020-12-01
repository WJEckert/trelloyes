import App from './App.js';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import store from './STORE.js';

it('renders without crashing', () => {
    const div = document.createElement('main');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<App store = {store}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });