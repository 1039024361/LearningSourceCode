import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './Context'

class Button extends Component {
  render() {
    return (
      <button style={{background: this.context.color}}>
        { this.props.children }
      </button>
    )
  }
}

Button.contextTypes = {
  color: PropTypes.string
}

// Button.contextType = ThemeContext

export default Button 
