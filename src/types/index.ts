import {
	NOTES_SUCCESS,
	ADD_NOTE,
	EDIT_NOTE,
	REMOVE_NOTE,
	FETCH_NOTES_REQUEST,
	FETCH_NOTES_SUCCESS,
	FETCH_NOTES_FAILURE,
} from '../constants'
import { RouteComponentProps } from 'react-router-dom'

//Store
export type Loading = boolean

export type Error = string | null

export interface INote {
	id: number
	title: string
}

//Action
interface FetchRequest {
	type: typeof FETCH_NOTES_REQUEST
}

interface FetchSuccess {
	type: typeof FETCH_NOTES_SUCCESS
}

interface FetchFailure {
	type: typeof FETCH_NOTES_FAILURE
	payload: string
}

interface INotesSuccess {
	type: typeof NOTES_SUCCESS
	payload: {
		notes: Array<INote>
	}
}

interface IAddNote {
	type: typeof ADD_NOTE
	payload: {
		note: INote
	}
}

interface IEditNote {
	type: typeof EDIT_NOTE
	payload: {
		note: INote
	}
}

interface IRemoveNote {
	type: typeof REMOVE_NOTE
	payload: {
		id: number
	}
}

export type NoteActionTypes = INotesSuccess | IAddNote | IEditNote | IRemoveNote
export type RequestTypes = FetchRequest | FetchSuccess | FetchFailure
