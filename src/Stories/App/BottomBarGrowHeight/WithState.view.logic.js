import WithState from './WithState.view.js'
import React, { useReducer } from 'react'

export default function WithStateLogic(props) {
  let [isBigger, toggleIsBigger] = useReducer(is => !is, false)

  return (
    <WithState
      {...props}
      isBigger={isBigger}
      onClick={toggleIsBigger}
    />
  )
}
