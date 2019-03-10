import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import {
	required,
	passwordsMatch,
	isValidEmail,
	length
} from './validators';
import Input from './input';
import { registerUser } from '../actions/users';
import formStyles from './styles/forms.module.css';
import styles from './styles/Registration.module.css';

const passwordLength = length({ min: 8, max: 72 });
const usernameLength = length({ min: 3, max: 32 });

class Registration extends Component {
	componentDidMount(){
		console.log('mounted');
	}
	handleFormSubmit = values => {
		const user = values;

		this.props
			.dispatch(registerUser(user))
			.then(() => this.props.history.push('/dashboard'));
	};

	render() {
		return (
			<main className={formStyles.container}>
				<form
					className={formStyles.form}
					onSubmit={this.props.handleSubmit(values =>
						this.handleFormSubmit(values)
					)}
				>
					<fieldset className={formStyles.fieldset}>
						<legend className={formStyles.legend}>Register</legend>
						
						<Field
							name="firstName"
							type="text"
							// label="First Name"
							component={Input}
							placeholder="First Name"
							validate={[required]}
						/>
						<Field
							name="lastName"
							type="text"
							// label="Last Name"
							component={Input}
							placeholder="Last Name"
							validate={[required]}
						/>
						<Field
							name="email"
							type="text"
							// label="Last Name"
							component={Input}
							placeholder="Email (optional)"
							validate={[isValidEmail]}
						/>
						<Field
							name="username"
							type="text"
							// label="Email"
							component={Input}
							placeholder="Username"
							// // Add an element prop to change the type of input
							// element="select"
							validate={[required, usernameLength]}
						/>
						<Field
							name="password"
							type="password"
							// label="Password"
							component={Input}
							placeholder="Password"
							validate={[required, passwordLength]}
						/>
						<Field
							name="confirmPassword"
							type="password"
							// label="Confirm Password"
							component={Input}
							placeholder="Confirm Password"
							validate={[required, passwordsMatch, passwordLength]}
						/>
						<button type="submit" className={styles.button}>
							Sign up
						</button>
					</fieldset>
				</form>

				<Link to="/login" className={formStyles.registerLink}>
					Already have an account? Login here.
				</Link>
			</main>
		);
	}
}

Registration = connect()(Registration);

export default reduxForm({
	form: 'registration'
})(Registration);