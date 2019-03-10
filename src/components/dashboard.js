import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';
import SearchResult from './search-result';
import styles from './styles/Dashboard.module.css';

class Dashboard extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const searchTerm = event.target.search.value;
        if (searchTerm) {
            this.props.dispatch(fetchMovies(searchTerm));
        }
        event.target.reset();
    }

    render() {

        return (
            <section className={styles.container}>
                <form onSubmit={e => this.onSubmit(e)}>
                    <label htmlFor="search">Search</label>
                    <input
                        type="text"
                        name="search"
                        placeholder="Which TV show or movie are you searching for?"
                    />
                </form>
                <SearchResult />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
		username: state.auth.currentUser.username,
		loggedIn: state.auth.loggedIn
    };
};

export default connect(mapStateToProps)(Dashboard);
