import　React from 'react'
import Provider from './Provider'

export function rootContainter (container) {
  return React.createElement(
    Provider,
    null,
    container
  )
}