import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { createList } from '../actions/add';
import { clearState } from '../actions/search';

class Lists extends React.Component {
    submitList(e) {
        e.preventDefault();
        const listTitle = e.target.newList.value;
        this.props.dispatch(createList(listTitle));
    }

    componentWillUnmount() {
        this.props.dispatch(clearState());
    }

    render() {
        const lists = this.props.lists.map((list, index) => {
            const link = 'lists/' + list.id;
            return (
                <Link to={link} key={index} name={list.title}>
                    <button key={index}>{list.title}</button>
                </Link>
            );
		});
		
        if (this.props.loggedIn) {
            return (
                <section>
                    <div>
                        <form onSubmit={e => this.submitList(e)}>
                            <label htmlFor="">Create list:</label>
                            <input type="text" name="newList" />
                            <button>Create</button>
                        </form>
                        <p>Lists</p>
                        <ul className="movie-lists">{lists}</ul>
                    </div>
                </section>
            );
        } else {
			return <Redirect to="/" />
		}
    }
}

const mapStateToProps = state => {
    return {
        lists: state.listData.data,
        loggedIn: state.auth.loggedIn
    };
};

export default connect(mapStateToProps)(Lists);
