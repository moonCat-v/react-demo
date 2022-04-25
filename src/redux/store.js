import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

const composeMidd = compose(
  applyMiddleware(thunk)
)


export default createStore(reducer, composeWithDevTools(composeMidd))