import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import M from 'materialize-css'
 
export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    M.AutoInit();

    return (
        <nav>
            <ul id="dropdown1" className="dropdown-content">
                <li><NavLink to="#"><i class="material-icons left">visibility</i>View</NavLink></li>
                <li><NavLink to="#"><i class="material-icons left">border_color</i>Edit</NavLink></li>
                <li class="divider"></li>
                <li><a href="/" onClick={logoutHandler}><i class="material-icons left">exit_to_app</i>Logout</a></li>
            </ul>
            <div className="nav-wrapper blue-grey darken-1">
                    <NavLink to="/" className="brand-logo">Home</NavLink>
                    <ul className="right">
                        <li><a className="dropdown-trigger" href="#" data-target="dropdown1">My Profile<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
            </div>
        </nav>
    )
}