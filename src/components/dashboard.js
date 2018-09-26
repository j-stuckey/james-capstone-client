import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Nav from './Nav';
import Search from './search';
import SearchResult from './search-result';

class Dashboard extends React.Component {
    componentDidMount() {
        
    }

    render() {
        return (
            <section>
                <Nav />
                <Search />
                <SearchResult />
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
