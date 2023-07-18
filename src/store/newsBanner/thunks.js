
import { collection, deleteDoc, doc, setDoc} from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';

export const startSaveUids = () => {

    return async(dispatch,getState) => {
        const { uid} = getState().auth;

        const newNote ={
            title:'',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc ( collection(FirebaseDB,`${uid}/journal/notas/`))
        const newNoteResp = await setDoc(newDoc,newNote);
        
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
        

    }
}