import React from 'react'
import { INote } from '../../types'
import { useRequestData } from '../CustomHook/CustomHook'
import NoteListItem from '../NoteListItem'
import Spinner from '../Spinner'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const NoteList: React.FC = () => {
	const { notes, loading, error } = useRequestData()

	if (loading && !notes) {
		return <Spinner />
	}

	if (error && !notes) {
		return (
			<div className="text-center">
				Ошибка сети: <b>{error}</b>
			</div>
		)
	}

	if (notes?.length === 0 || !notes) {
		return <div className="text-center">Заметки отсутствуют</div>
	}

	return (
		<ul className="notes-list">
			<TransitionGroup enter exit component={null}>
				{notes.map((note: INote) => (
					<CSSTransition key={note.id} timeout={500} classNames="popup-item">
						<NoteListItem {...note} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	)
}

export default NoteList
