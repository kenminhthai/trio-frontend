import React from 'react'
import ReactDOM from 'react-dom'
import Trio from './Trio'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Trio />, div)
});
