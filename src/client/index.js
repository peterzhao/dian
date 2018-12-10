import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ProductList from './product-list'
import '../../public/site.css'

import { reducer }  from './reducer'


const store = createStore(reducer)

const app = (
  <Provider store={store}>
    <ProductList/>
  </Provider>
)

ReactDom.render(app, document.querySelector('#app'))
