import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { INote } from '../../types'
import { rootStateReducer } from '../../reducer'
import ButtonRemoveNote from '../ButtonRemoveNote'

type NoteListItemProps = INote & RouteComponentProps

const NoteListItem: React.FC<NoteListItemProps> = ({ id, title, history }) => {
	const loading = useSelector((state: rootStateReducer) => state.loading)
	const editNote = (id: number) => {
		history.push(id.toString())
	}

	return (
		<li className="notes-list__item">
			<div className="note-id field">{id}</div>
			<div className="note-title field">{title}</div>
			<div className="note-control field">
				<div className="note-control__edit mb-1">
					<button
						className={`waves-effect waves-light btn-small green accent-4 ${
							loading ? 'disabled' : ''
						}`}
						onClick={() => editNote(id)}
					>
						<i className="material-icons left">edit</i>Изменить
					</button>
				</div>
				<div className="note-control__remove">
					<ButtonRemoveNote id={id} />
				</div>
			</div>
		</li>
	)
}

export default withRouter(NoteListItem)
