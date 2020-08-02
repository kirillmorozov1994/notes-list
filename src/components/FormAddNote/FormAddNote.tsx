import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Form from '../Form'

type FormAddNoteProps = {
	visible: boolean
	closeModal: () => void
}

const FormAddNote: React.FC<FormAddNoteProps> = ({ visible, closeModal }) => {
	const refOverlay = useRef<HTMLDivElement>(null)
	const refClose = useRef<HTMLElement>(null)

	const closeAddForm = (e: React.MouseEvent<HTMLElement>): void => {
		if (e.target === refOverlay.current || e.target === refClose.current) {
			closeModal()
		}
	}

	return (
		<CSSTransition in={visible} timeout={500} unmountOnExit classNames="popup">
			<div ref={refOverlay} className="form-add" onClick={closeAddForm}>
				<div className="form-add-note">
					<div className="form-add-note__close">
						<i ref={refClose} className="material-icons form-close small">
							close
						</i>
					</div>
					<div className="form-add-note__title">
						<h4>Добавить заметку</h4>
					</div>
					<Form type={'create'} closeModal={closeModal} />
				</div>
			</div>
		</CSSTransition>
	)
}

export default FormAddNote
