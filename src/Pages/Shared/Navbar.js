import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import interior from '../../assets/images/interior2.png';
import './Navbar.css';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li className='text-blue-500 style1'><Link to="/">Home</Link></li>
        <li className='text-fuchsia-500 style2'><Link to="/appointment">Appointment</Link></li>
        <li className='text-blue-500 style1'><Link to="/review">Review</Link></li>
        <li className='text-blue-500 style1'><Link to="/contact">Contact Us</Link></li>
        <li className='text-blue-500 style1'><Link to="/about">About</Link></li>
        {
            user && <li className='text-fuchsia-500 style2'><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className='bg-red-500 text-white mr-1 style3' onClick={logout} >Sign Out</button> :
            <Link className='text-blue-500 style1' to="/login">Login</Link>}</li>
        <li className='text-white bg-slate-500 rounded-lg'> {user ? '' : <Link to="signup">Sign Up</Link>}</li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/"><a className="normal-case text-xl">
                    <img className='logo' src={interior} alt="interior" />
                </a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;