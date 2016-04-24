import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk'
import { DashboardContainer } from './components/Dashboard'

require('../styles/main.scss')

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <DashboardContainer />
  </Provider> ,
  document.getElementById('app')
)
