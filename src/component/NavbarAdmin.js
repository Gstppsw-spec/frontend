import React from "react";
import beranda from "./beranda.png";
import login from "./login.png";
import tambah from "./tambah.png";
import kategori from "./kategori.png";
import "./style/Kepala.css";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <div className="navigasi">
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
              <Link href="/#">Action</Link>
              <Link href="/#">Another action</Link>
            </div>
          </a>

          <a className="navchild">
            <Link href="/#">
              <img src={tambah} />
              Tambah
            </Link>
          </a>

          <a className="navchild">
            <Link href="/#">
              <img src={login} />
              Keluar
            </Link>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavbarAdmin;
