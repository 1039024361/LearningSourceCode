
import React, { Component } from 'react'
export const ThemeContext = React.createContext({ color: 'red' })

export const ThemeProvider = ThemeContext.Provider