import { NOTES_SUCCESS, ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../constants'
import { INote, NoteActionTypes } from '../types'

type NotesState = Array<INote> | null
const initialState = null

const notesReducer = (state: any = initialState, action: NoteActionTypes): NotesState => {
	switch (action.type) {
		case NOTES_SUCCESS:
			return [...action.payload.notes]
		case ADD_NOTE:
			const newNote: INote = action.payload.note
			return [...state, newNote]
		case EDIT_NOTE:
			const editNote = action.payload.note
			const indexNote = state.findIndex((note: INote) => note.id === editNote.id)
			return [...state.slice(0, indexNote), editNote, ...state.slice(indexNote + 1)]
		case REMOVE_NOTE:
			const index = state.findIndex((note: INote) => note.id === action.payload.id)
			return [...state.slice(0, index), ...state.slice(index + 1)]
		default:
			return state
	}
}

export { notesReducer }
