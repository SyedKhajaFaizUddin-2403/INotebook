import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light"  style={{position:"fixed",top:"0px",width:"100%",left:"0px",backgroundColor: "#e3f2fd",opacity:"70%"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NoteVerse</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link to="/notes" className={`nav-link ${location.pathname === "/notes" ? "active" : ""}`} aria-current="page" >Your Notes</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${location.pathname === "/addnote" ? "active" : ""}`} aria-current="page" >AddNote</Link>
                            </li> */}

                            <li className="nav-item" >
                                <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} >About</Link>
                            </li>
                        </ul>


                        {!localStorage.getItem('token') ?
                            <form className='d-flex'>
                                <Link to="/login" className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} ></Link>
                                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} >Logout</Link>
                            </form> :
                            <Link to="/login" onClick={handleLogout} className={`nav-link ${location.pathname === "/logout" ? "active" : ""}`} >Logout</Link>
                        }

                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Navbar



// import React from 'react'
// import { Link, useNavigate, useLocation } from 'react-router-dom'

  

// const Navbar = () => {
//     //let location = useLocation();
    
//     const navigate = useNavigate();
//     const location = useLocation();
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/login')
//     }
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">NoteVerse</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
//                         </li>

//                     </ul>
//                     <form className="d-flex"> 
//                     {/* <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
//                     <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link> */}
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar
