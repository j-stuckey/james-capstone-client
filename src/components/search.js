import React from 'react';
import { fetchMoviesRequest, fetchMovies } from '../actions/movies';
import { connect } from 'react-redux';

class Search extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const searchTerm = event.target.search.value;
        console.log(searchTerm);
        if (searchTerm) {
            this.props.dispatch(fetchMovies(searchTerm));
        }
        event.target.reset();
    }

    // search(event) {
    //     event.preventDefault();
    //     const searchTerm = event.target.value;
    //     console.log(searchTerm);
    //     if (searchTerm) {
    //         this.props.dispatch(fetchMovies(searchTerm));
    //     }
    // }

    // onChange={e => this.search(e)
    // onSubmit={e => this.onSubmit(e)}

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    name="search"
                    placeholder="Which movie are you searching for?"
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    };
};

export default connect(mapStateToProps)(Search);
