import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './styles/BurgerMenu.module.css';
// import { Menu as MenuButtons } from './Menu';

export class BurgerMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};

		this.activeStyle = {
			fontWeight: 'bold',
			color: 'red',
			background: 'black'
		};
	}

	handleClick = () => {
		//sets state to show the hamburger menu as clicked
		this.setState({ show: !this.state.show });
	};

	render() {
		return (
			<span>
				<button
					className={this.state.show ? styles.changed : styles.burger}
					onClick={this.handleClick}
				>
					<div className={styles.line1} />
					<div className={styles.line2} />
					<div className={styles.line3} />
				</button>

				<Modal className={this.state.show ? styles.modal : null}>
					<MenuButtons
						className={
							this.state.show
								? styles.modalContent
								: styles.modalContentHide
						}
					>
						                <Link className={styles.links} activeClassName={styles.active} to="/dashboard">Dashboard</Link>
                <Link className={styles.links} activeClassName={styles.active} to="/lists">Favorites</Link>
					</MenuButtons>
				</Modal>
			</span>
		);
	}
}

export const MenuButtons = (props) => {
	return <div className={props.className}>
		{props.children}
	</div>;
};

const Modal = props => {
	return <div className={props.className}>{props.children}</div>;
};

export default connect()(BurgerMenu);
