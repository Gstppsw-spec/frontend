import React from "react";
import logo from "./logo.png";
import "./style/Kepala.css";

const Kepala = () => {
  return (
    <div>
      <header>
        <div className="form-group">
          <img src={logo} className="itera" alt="logo" />
          <div className="kanan">
            <h3 className="judul">Sistem Informasi Kompetisi</h3>
            <p className="instansi">"Institut Teknologi Sumatera"</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Kepala;
