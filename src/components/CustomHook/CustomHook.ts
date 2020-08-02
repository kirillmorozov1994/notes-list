import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { rootStateReducer } from '../../reducer'
import { thunkRequestData } from '../../action'

const useRequestData = () => {
	const notes = useSelector((state: rootStateReducer) => state.notes)
	const loading = useSelector((state: rootStateReducer) => state.loading)
	const error = useSelector((state: rootStateReducer) => state.error)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!notes) {
			dispatch(thunkRequestData())
		}
		//eslint-disable-next-line
	}, [])

	return {
		notes,
		loading,
		error,
	}
}

export { useRequestData }
