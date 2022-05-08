import React from "react";
import beranda from "./beranda.png";
import login from "./login.png";
import kategori from "./kategori.png";
import "./style/Kepala.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigasi">
      <nav>
        <a className="navchild">
          <Link href="/#">
            <img src={beranda} />
            Beranda
          </Link>
        </a>

        {/* <a className="navchild">
          <img src={kategori} />
          Kategori
        </a> */}

        <a className="navchild">
          <Link
            className="dropdown-toggle"
            href="/#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={kategori} />
            Kategori
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link href="/#">
              Action
            </Link>
            <Link href="/#">
              Another action
            </Link>
          </div>
        </a>

        <a className="navchild">
          <Link to="/perloginan">
            <img src={login} />
            Login
          </Link>
        </a>
      </nav>
    </div>
  );
};

// import React from 'react';

// const Navbar = () => {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <Link className="navbar-brand" href="#">Navbar</Link>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-item active">
//                             <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" href="#">Link</Link>
//                         </li>
// <li className="nav-item dropdown">
//     <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     <img src={kategori} />
//         Dropdown
//     </Link>
//     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//         <Link className="dropdown-item" href="#">Action</Link>
//         <Link className="dropdown-item" href="#">Another action</Link>
//         <div className="dropdown-divider"></div>
//         <Link className="dropdown-item" href="#">Something else here</Link>
//     </div>
// </li>
//                         <li className="nav-item">
//                             <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
//                         </li>
//                     </ul>
//                     <form className="form-inline my-2 my-lg-0">
//                         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                     </form>
//                 </div>
//             </nav>
//         </div>
//     )
// }

export default Navbar;
