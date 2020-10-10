import React, { Component } from 'react'
import Button from './Button'
import { ThemeProvider } from './Context'

export default class ContextPage extends Component {
  render() {
    return (
      <div>
        <ThemeProvider value={{ color: 'yellow' }}>
          <Button>Click</Button>
        </ThemeProvider>
      </div>
    )
  }
}
