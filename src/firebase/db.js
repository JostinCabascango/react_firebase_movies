import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc, getDoc} from 'firebase/firestore';
import {app} from './firebase';

const db = getFirestore(app);
const moviesCollection = collection(db, 'movies');

const getMovieDoc = (id) => doc(db, 'movies', id);

const handleFirestoreError = (error, operation) => {
    console.error(`Error ${operation}: `, error);
    throw error;
};

export const addMovie = async (movie) => {
    try {
        const docRef = await addDoc(moviesCollection, movie);
        return docRef.id;
    } catch (error) {
        handleFirestoreError(error, 'adding document');
    }
};

export const getMovies = async () => {
    try {
        const querySnapshot = await getDocs(moviesCollection);
        return querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    } catch (error) {
        handleFirestoreError(error, 'getting documents');
    }
};

export const updateMovie = async (id, updatedMovie) => {
    try {
        await setDoc(getMovieDoc(id), updatedMovie);
    } catch (error) {
        handleFirestoreError(error, 'updating document');
    }
};

export const deleteMovie = async (id) => {
    try {
        await deleteDoc(getMovieDoc(id));
    } catch (error) {
        handleFirestoreError(error, 'deleting document')
    }
};

export const getMovie = async (id) => {
    try {
        const docSnapshot = await getDoc(getMovieDoc(id));
        if (docSnapshot.exists()) {
            return {id: docSnapshot.id, ...docSnapshot.data()};
        } else {
            throw new Error('Movie not found');
        }

    } catch (error) {
        handleFirestoreError(error, 'getting document');
    }
}