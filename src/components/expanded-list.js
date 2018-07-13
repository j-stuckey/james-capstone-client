import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentList } from '../actions/protected-data';

class ExpandedList extends React.Component {
    componentDidMount() {
        this.fetchMoviesFromList();
    }

    fetchMoviesFromList() {
        const listId = this.props.match.params.id;
        this.props.dispatch(fetchCurrentList(listId));
    }

    render() {
        const movieList = this.props.movies;

        const movies = movieList.map(movie => {
            return (
                <li className="movie-item">
                    <div>{movie.title}</div>
                    <div>{movie.year}</div>

                    <img src={movie.poster} alt="" />
                </li>
            );
        });
        return (
            <main>
                <h1>{this.props.title}</h1>
                <ul className="result-list">{movies}</ul>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        lists: state.listData.data,
        movies: state.listData.currentList,
        title: state.listData.title
    };
};

export default connect(mapStateToProps)(ExpandedList);
