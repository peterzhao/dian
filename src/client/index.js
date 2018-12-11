import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reduxLogger from 'redux-logger'
import App from './components/app'
import { fetchProducts } from './actions/product'
import '../../public/site.css'

import { reducer }  from './reducers'


const store = createStore(
  reducer,
  applyMiddleware(thunk, reduxLogger))

store.dispatch(fetchProducts())

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDom.render(app, document.querySelector('#app'))
