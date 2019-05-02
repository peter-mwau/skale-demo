import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import web3Reducer from './reducers/web3/web3Reducer'
import statusReducer from './reducers/statusReducer'


const reducer = combineReducers({
  routing: routerReducer,
  status: statusReducer,
  web3: web3Reducer,
})

export default reducer
