import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import BurgerMenu from './BurgerMenu';

import styles from './styles/Nav.module.css';
import buttonStyles from './styles/button.module.css';

class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

    logout = ()  => {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }
        // Only renders the log out button if we're logged in

        const logoutButton = (
            <button onClick={this.logout} className={`${styles.logoutButton}`}>Log Out</button>
        );

        return (
            <nav className={styles.nav}>
                <Link className={styles.links} activeClassName={styles.active} to="/dashboard">Dashboard</Link>
                <Link className={styles.links} activeClassName={styles.active} to="/lists">Favorites</Link>
			
				{logoutButton}
				<BurgerMenu />
            </nav>
        );
    }
}
const mapStateToProps = state => {
    return {
        loggedIn: state.auth.currentUser !== null
    };
};

export default connect(mapStateToProps)(Nav);
