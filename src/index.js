import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Button from './components/button'

class App extends Component {
  render() {
    return (
      <div>
        <Button color="red">Hello</Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

module.hot.accept()
