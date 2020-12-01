import Card from './Card.js';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it('renders the UI as expected', () => {
    const tree = renderer
    .create(<Card title="Card title" content='dsau'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });


