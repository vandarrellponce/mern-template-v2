import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from '../reducers/users/userReducer'

// RETREIVING ITEMS FROM STORAGE
const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: []

// INITIAL STATE
const initialState = {}
// ROOT REDUCER
const rootReducer = combineReducers({
	user: userReducer,
})
// STORE
const middleware = [thunk]
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
