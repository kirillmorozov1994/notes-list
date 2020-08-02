import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { rootStateReducer } from '../../reducer'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { thunkRequestDelete } from '../../action'

interface RemoveProps {
	id: number
	redirect?: boolean
}

type ButtonRemoveNoteProps = RouteComponentProps & RemoveProps

const ButtonRemoveNote: React.FC<ButtonRemoveNoteProps> = ({ id, redirect = false, history }) => {
	const loading = useSelector((state: rootStateReducer) => state.loading)
	const dispatch = useDispatch()

	const removeNoteItem = (id: number): void => {
		dispatch(thunkRequestDelete(id))
		if (redirect) {
			history.push('/')
		}
	}

	return (
		<button
			className={`waves-effect waves-light btn-small red darken-1 ${loading ? 'disabled' : ''}`}
			onClick={() => removeNoteItem(id)}
		>
			<i className="material-icons left">delete_sweep</i>
			Удалить
		</button>
	)
}

export default withRouter(ButtonRemoveNote)
