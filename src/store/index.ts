import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducer'

const createConfigStore = () => {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
	return store
}

export default createConfigStore()
