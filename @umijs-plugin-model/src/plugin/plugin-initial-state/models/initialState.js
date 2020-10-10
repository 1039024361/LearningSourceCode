import { useState, useEffect, useCallback } from 'react'
import * as app from '../../../App'

async function getInitialState () {
  const res = await app.getInitialState()
  console.log('await app.getInitialState(): ', res)
  return res
}

const initialState = {
  initialState: undefined,
  loading: true,
  error: undefined
}

export default () => {
  const [state, setState] = useState(initialState)

  const refresh = useCallback(async () => {
    setState((s) => ({ ...s, loading: true, error: undefined }))
    try {
      const asyncFunc = () => new Promise(res => res(getInitialState()))
      const ret = await asyncFunc()
      setState(s => ({ ...s, initialState: ret, loading: false, error: undefined }))
    } catch (e) {
      setState(s => ({ ...s, loading: false, error: e }))
    }
  }, [])

  const setInitialState = useCallback(initialState => {
    setState(s => ({ ...s, initialState, loading: false }))
  })

  useEffect(() => {
    refresh()
  }, [])

  return {
    ...state,
    refresh,
    setInitialState
  }
}