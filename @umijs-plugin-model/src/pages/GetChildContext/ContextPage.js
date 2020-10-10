import React, { Component } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
// import { ThemeProvider } from './Context'

export default class ContextPage extends Component {

  getChildContext () {
    return { color: 'yellow' }
  }

  render() {
    return (
      <div>
        <Button>Click</Button>
      </div>
    )
  }
}

ContextPage.childContextTypes = {
  color: PropTypes.string
}
