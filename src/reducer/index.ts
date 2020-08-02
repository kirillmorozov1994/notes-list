import { combineReducers } from 'redux'
import { loadingReducer } from './loadingReducer'
import { errorReducer } from './errorReducer'
import { notesReducer } from './notesReducer'

const rootReducer = combineReducers({
	loading: loadingReducer,
	error: errorReducer,
	notes: notesReducer,
})

export default rootReducer
export type rootStateReducer = ReturnType<typeof rootReducer>
