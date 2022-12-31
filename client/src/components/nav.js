import React from 'react';

const Nav = props => {
        const userSignout = () => {
            localStorage.removeItem("strings_user_id"); 
            props.setStringsUserID('');
        }

    return (
        <div className="row" id="nav-row">
            <div className="col-4 offset-4">
                <h1>Strings</h1>
            </div>
            <div className="col-4" id="logout-column">
                <button 
                    className="btn btn-danger"
                    onClick={userSignout}
                >
                    Logout
                </button>
            </div>
        </div>
        );

}

export default Nav;