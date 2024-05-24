import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { app } from './firebase';

const db = getFirestore(app);
const moviesCollection = collection(db, 'movies');

export const addMovie = async (movie) => {
    try {
        const docRef = await addDoc(moviesCollection, movie);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};

export const getMovies = async () => {
    try {
        const querySnapshot = await getDocs(moviesCollection);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error getting documents: ", error);
        throw error;
    }
};