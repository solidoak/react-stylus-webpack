import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

describe('<App />', () => {
  it('should render the correct initial text', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    expect(ReactDOM.findDOMNode(div).textContent).toMatch(/Ready.../)
  })
})
