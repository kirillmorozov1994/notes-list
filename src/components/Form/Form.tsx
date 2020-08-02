import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { thunkRequestCreate, thunkRequestEdit } from '../../action'
import { rootStateReducer } from '../../reducer'

interface Props {
	type: string
	closeModal: () => void
	title?: string
}

type FormProps = RouteComponentProps & Props

const Form: React.FC<FormProps> = ({ type, title, closeModal, history }) => {
	const [value, setValue] = useState('')
	const [warning, setWarning] = useState<string | null>(null)
	const editNote = useSelector((state: rootStateReducer) =>
		state.notes?.find((note) => note.title === title)
	)
	const dispatch = useDispatch()

	useEffect(() => {
		if (title) {
			setValue(title)
		}
		//eslint-disable-next-line
	}, [])

	const validateForm = (): boolean => {
		if (value.trim().length === 0) {
			setWarning('Поле не может быть пустым')
			return false
		}
		setWarning(null)
		return true
	}

	const hadlerSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (validateForm()) {
			setValue('')
			if (type === 'create') {
				dispatch(thunkRequestCreate(value))
				closeModal()
			} else {
				if (editNote) {
					dispatch(thunkRequestEdit({ ...editNote, title: value }))
					history.push('/')
				}
			}
		}
	}

	const changeEventInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}

	return (
		<form onSubmit={hadlerSubmitForm}>
			<div className="input-field">
				<input
					id="title"
					type="text"
					className={warning ? 'invalid' : ''}
					placeholder="Введите текст заметки"
					value={value}
					onChange={changeEventInput}
				/>
				{warning && <div className="red-text mb-1">{warning}</div>}
				{type === 'create' ? (
					<button type="submit" className="waves-effect waves-light btn-small green accent-4">
						Создать заметку
					</button>
				) : title === value ? (
					<Link to="/">
						<button className="waves-effect waves-light btn-small green accent-4">
							Назад к заметкам
						</button>
					</Link>
				) : (
					<button type="submit" className="waves-effect waves-light btn-small green accent-4">
						Сохранить
					</button>
				)}
			</div>
		</form>
	)
}

export default withRouter(Form)
