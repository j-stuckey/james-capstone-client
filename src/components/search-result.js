import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions/add';
import { clearState } from '../actions/search';

class SearchResult extends React.Component {
    addMovie(e, movie) {
        e.preventDefault();
        const movieId = movie.imdbID;
        const listId = e.target.listOption.value;
        const year = movie.Year;
        const title = movie.Title;
        const poster = movie.Poster;
        // Here you're going to dispatch the function
        // that adds the movie to the list.
        this.props.dispatch(addMovie(movieId, listId, year, title, poster));
    }

    componentWillUnmount() {
        this.props.dispatch(clearState());
    }

    clearSearch() {
        this.props.dispatch(clearState());
    }

    render() {
        const lists = this.props.lists.map((list, index) => {
            return (
                <option key={index} value={list.id}>
                    {list.title}
                </option>
            );
        });

        const movies = this.props.movies.map((movie, index) => {
            return (
                <form
                    className="movie-item"
                    key={index}
                    onSubmit={e => this.addMovie(e, movie)}
                >
                    <span>{movie.Title}</span>
                    <img src={movie.Poster} alt="" width="200" />

                    <select name="listOption">{lists}</select>

                    <button className="add-movie" type="submit">
                        Add movie to List
                    </button>
                </form>
            );
        });

        return (
            <div>
                <ul className="result-list">{movies}</ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        movies: state.movies.movies,
        error: state.movies.error,
        lists: state.listData.data
    };
};

export default connect(mapStateToProps)(SearchResult);
