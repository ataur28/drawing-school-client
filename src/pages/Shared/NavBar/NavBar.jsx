import { Link } from "react-router-dom";
import logo from '../../../assets/Dollhouse_Logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);


    const handleLogOut =() =>{
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to='/allDolls'>All Dolls</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/addDoll'>Add A Doll</Link></li>
        <li><Link to='/myDoll'>My Doll</Link></li>
        {user?.email? <li><button onClick={handleLogOut}>LogOut</button></li> : <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-48 h-12 mt-1 rounded-2xl bg-slate-300 p-1" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-accent">Button</button>
            </div>
        </div>
    );
};

export default NavBar;