import React from 'react'
import initialState from '../plugin-initial-state/models/initialState'
import Dispatcher from './lib/helpers/dispatcher'
import Executor from './executor'
import { UmiContext } from './UmiContext'

export const models = { '@@initialState': initialState }

const dispatcher = new Dispatcher()
const Exe = Executor
export default ({ children }) => {
  return (
    <UmiContext.Provider value={dispatcher}>
      {
        Object.entries(models).map(pair =>  (
            <Exe key={pair[0]} namespace={pair[0]} hook={pair[1]} onUpdate={val => {
              const [ns] = pair
              dispatcher.data[ns] = val
              dispatcher.update(ns)
            }} />
          )
        )
      }
      {children}
    </UmiContext.Provider>
  )
}