import { FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS, FETCH_NOTES_FAILURE } from '../constants'
import { Loading, RequestTypes } from '../types'

const initialState: Loading = false

const loadingReducer = (state = initialState, { type }: RequestTypes): Loading => {
	switch (type) {
		case FETCH_NOTES_REQUEST:
			return true
		case FETCH_NOTES_SUCCESS:
			return false
		case FETCH_NOTES_FAILURE:
			return false
		default:
			return state
	}
}

export { loadingReducer }
