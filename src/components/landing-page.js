import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton'
import styles from './styles/landing-page.module.css';

class LandingPage extends React.Component {
    render() {
		if (this.props.loggedIn) {
			return <Redirect to="/dashboard" />
		}

        return (
            <div className={styles.div}>

                <RegisterButton />

                <LoginButton />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LandingPage);

