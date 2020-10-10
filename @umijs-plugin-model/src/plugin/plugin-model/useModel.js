import { useState, useEffect, useContext, useRef } from 'react'
import isEqual from 'fast-deep-equal'
import { UmiContext } from './UmiContext'

export function useModel (namespace, updater) {
  const dispatcher = useContext(UmiContext)
  const updaterRef = useRef(updater)
  updaterRef.current = updater // todo: 1. 为什么这里还要重新赋值; 2. 为什么要使用这个引用
  const [state, setState] = useState(
    () => updaterRef.current ? updaterRef.current(dispatcher.data[namespace]) : dispatcher.data[namespace] // todo: 这里是个函数？-> 初始化执行函数，将函数返回值当作值进行初始化
  )
  const stateRef = useRef(state) // todo: 为什么要用引用指向当前state
  stateRef.current = state

  useEffect(() => {
    const handler = (data) => {
      if (updater && updaterRef.current) {
        const currentState = updaterRef.current(data)
        const previousState = stateRef.current
        if (!isEqual(currentState, previousState)) {
          setState(currentState)
        }
      } else {
        setState(data)
      }
    }
    try {
      dispatcher.callbacks[namespace].add(handler)
    } catch (e) {
      dispatcher.callbacks[namespace] = new Set()
      dispatcher.callbacks[namespace].add(handler)
    }
    return () => {
      dispatcher.callbacks[namespace].delete(handler)
    }
  }, [namespace])

  return state
}