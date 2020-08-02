import React from 'react'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { useRequestData } from '../CustomHook/CustomHook'
import { INote } from '../../types'
import Form from '../Form'
import Spinner from '../Spinner'
import ButtonRemoveNote from '../ButtonRemoveNote'

type RouteParams = {
	id: string
}

const EditPage: React.FC<RouteComponentProps<RouteParams>> = ({
	match: {
		params: { id },
	},
}) => {
	const { notes, loading, error } = useRequestData()

	if (loading || !notes) return <Spinner />

	if (error) {
		return (
			<div className="text-center">
				Ошибка сети: <b>{error}</b>
			</div>
		)
	}

	const findNote = notes?.find((note: INote) => note.id === +id)

	if (notes?.length === 0 || !findNote) return <Redirect to="/" />

	return (
		<div className="edit-page">
			<div className="edit-page__remove">
				<ButtonRemoveNote id={findNote.id} redirect={true} />
			</div>
			<div className="edit-page__title">
				<h3>{findNote.id}</h3>
			</div>
			<Form type={'edit'} title={findNote.title} closeModal={() => {}} />
		</div>
	)
}

export default EditPage
