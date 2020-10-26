import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import lobby from './storage/reduce.app'
import App from './App'

const store = createStore(lobby)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
