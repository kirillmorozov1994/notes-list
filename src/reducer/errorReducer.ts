import { FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS, FETCH_NOTES_FAILURE } from '../constants'
import { Error, RequestTypes } from '../types'

const errorReducer = (state: Error = null, action: RequestTypes): Error => {
	switch (action.type) {
		case FETCH_NOTES_REQUEST:
			return null
		case FETCH_NOTES_SUCCESS:
			return null
		case FETCH_NOTES_FAILURE:
			return action.payload
		default:
			return state
	}
}

export { errorReducer }
