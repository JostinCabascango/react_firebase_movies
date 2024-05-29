import {useParams, useNavigate} from 'react-router-dom';
import {addMovie, updateMovie, getMovie} from '../firebase/db';
import ErrorModal from "../components/ErrorModal.jsx";
import MovieForm from "../components/MovieForm.jsx";
import {useState, useEffect} from "react";

const initialMovieState = {
    title: '',
    description: '',
    direction: '',
    image: '',
    rate: '',
    year: '',
    duration: ''
};

const MovieFormPage = () => {
    const [movie, setMovie] = useState(initialMovieState);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            getMovie(id).then(setMovie);
        }
    }, [id]);

    const handleChange = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value});
    };

    const resetForm = () => {
        setMovie(initialMovieState);
    };

    const isValidMovie = (movie) => {
        return movie.title && movie.description && movie.direction && movie.image && movie.rate && movie.year && movie.duration;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValidMovie(movie)) {
            try {
                if (id) {
                    await updateMovie(id, movie);
                } else {
                    await addMovie(movie);
                }
                resetForm();
                navigate('/movies/list');
            } catch (error) {
                setError('Failed to save movie');
            }
        } else {
            setError('Please fill in all fields');
        }
    };
    const handleCloseErrorModal = () => {
        setError(null);
    };

    const currentYear = new Date().getFullYear();

    return (
        <div className="flex justify-center mt-10">
            {error && <ErrorModal message={error} onClose={handleCloseErrorModal}/>}
            <MovieForm movie={movie} handleChange={handleChange} handleSubmit={handleSubmit}
                       currentYear={currentYear} isEditing={!!id}/>
        </div>
    );
};
export default MovieFormPage;