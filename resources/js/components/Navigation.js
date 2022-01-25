import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () =>{

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Plain React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <Link className="nav-link" to="/notification"><i className="fa fa-bell"></i></Link>
                    <Link className="nav-link" to="/my-account">My Account</Link>
                </form>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navigation