import React from 'react';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { refreshAuthToken } from '../actions/auth';
import LoginForm from './LoginForm';
import Lists from './lists';
import Dashboard from './Dashboard';
import Nav from './Nav';
import expandedList from './expanded-list';

import styles from'./styles/app.module.css';
import LandingPage from './landing-page';

class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        }
        if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillMount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            15 * 60 * 1000
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <Router>
                
                <div className={styles.div}>

                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/register" component={RegistrationForm} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/lists" component={Nav} />
                    <Route exact path="/lists" component={Lists} />
                    <Route exact path="/lists/:id" component={expandedList} />
                        
                </div>
                
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);
