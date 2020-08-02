import {
	NOTES_SUCCESS,
	ADD_NOTE,
	EDIT_NOTE,
	REMOVE_NOTE,
	FETCH_NOTES_REQUEST,
	FETCH_NOTES_SUCCESS,
	FETCH_NOTES_FAILURE,
} from '../constants'
import { RequestTypes, INote, NoteActionTypes } from '../types'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { rootStateReducer } from '../reducer'

const fetchRequest = (): RequestTypes => ({
	type: FETCH_NOTES_REQUEST,
})

const fetchSuccess = (): RequestTypes => ({
	type: FETCH_NOTES_SUCCESS,
})

const fetchFailure = (error: string): RequestTypes => ({
	type: FETCH_NOTES_FAILURE,
	payload: error,
})

const fetchNotesSuccess = (notes: Array<INote>): NoteActionTypes => ({
	type: NOTES_SUCCESS,
	payload: { notes },
})

const addNote = (note: INote): NoteActionTypes => ({
	type: ADD_NOTE,
	payload: {
		note,
	},
})

const editNote = (note: INote): NoteActionTypes => ({
	type: EDIT_NOTE,
	payload: {
		note,
	},
})

const removeNote = (id: number): NoteActionTypes => ({
	type: REMOVE_NOTE,
	payload: {
		id,
	},
})

const thunkRequestData = (): ThunkAction<void, rootStateReducer, unknown, Action<string>> => async (
	dispatch
): Promise<any> => {
	try {
		dispatch(fetchRequest())
		const res = await fetch('https://test.megapolis-it.ru/api/list')
		if (res.status !== 200) {
			throw new Error('Сервер не отвечает')
		}
		const body = await res.json()
		if (body.success) {
			dispatch(fetchNotesSuccess(body.data))
			dispatch(fetchSuccess())
		} else {
			throw new Error(body.error)
		}
	} catch (e) {
		dispatch(fetchFailure(e))
	}
}

const thunkRequestCreate = (
	title: string
): ThunkAction<void, rootStateReducer, unknown, Action<string>> => async (
	dispatch
): Promise<any> => {
	try {
		dispatch(fetchRequest())
		const res = await fetch('https://test.megapolis-it.ru/api/list', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title }),
		})
		if (res.status !== 200) {
			throw new Error(res.statusText)
		}
		const body = await res.json()
		if (body.success) {
			dispatch(addNote({ id: body.id, title }))
			dispatch(fetchSuccess())
		} else {
			throw new Error(body.error)
		}
	} catch (e) {
		dispatch(fetchFailure(e))
	}
}

const thunkRequestEdit = (
	note: INote
): ThunkAction<void, rootStateReducer, unknown, Action<string>> => async (
	dispatch
): Promise<any> => {
	try {
		dispatch(fetchRequest())
		const res = await fetch(`https://test.megapolis-it.ru/api/list/${note.id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title: note.title }),
		})
		if (res.status !== 200) {
			throw new Error(res.statusText)
		}
		const body = await res.json()
		if (body.success) {
			dispatch(editNote(note))
			dispatch(fetchSuccess())
		} else {
			throw new Error(body.error)
		}
	} catch (e) {
		dispatch(fetchFailure(e))
	}
}

const thunkRequestDelete = (
	id: number
): ThunkAction<void, rootStateReducer, unknown, Action<string>> => async (
	dispatch
): Promise<any> => {
	try {
		dispatch(fetchRequest())
		const res = await fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
			method: 'DELETE',
		})
		if (res.status !== 200) {
			throw new Error(res.statusText)
		}
		const body = await res.json()
		if (body.success) {
			dispatch(removeNote(id))
			dispatch(fetchSuccess())
		} else {
			throw new Error(body.error)
		}
	} catch (e) {
		dispatch(fetchFailure(e))
	}
}

export { thunkRequestData, thunkRequestCreate, thunkRequestEdit, thunkRequestDelete }
