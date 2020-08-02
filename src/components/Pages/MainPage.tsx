import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { rootStateReducer } from '../../reducer'
import FormAddNote from '../FormAddNote'
import NoteList from '../NoteList'

const MainPage = () => {
	const [visibleModal, setVisibleModal] = useState<boolean>(false)
	const loading = useSelector<rootStateReducer>((state) => state.loading)

	const showOrHideModal = () => {
		setVisibleModal((visible: boolean) => !visible)
	}

	return (
		<div className="main-page">
			<div className="add-note text-right mb-1">
				<button
					className={`waves-effect waves-light btn-large ${loading ? 'disabled' : ''}`}
					onClick={showOrHideModal}
				>
					<i className="material-icons left">add_circle</i>Добавить заметку
				</button>
			</div>
			<NoteList />
			<FormAddNote visible={visibleModal} closeModal={showOrHideModal} />
		</div>
	)
}

export default MainPage
