import React, { Component, useState } from "react";
import "./style/Badan.css";
import mlbb from "./mlbb.png";
import imaaa from "./imaaa.jpg";
import Kepala from "./Kepala";
import Navbar from "./Navbar";

const Deskripsi = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  console.log(email);

  return (
    <div className="App">
      <div>
        <Kepala />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="con">
        <div className="konten">
          <h2>Deskripsi Kompetisi</h2>
          <hr></hr>
          <div className="perjudulan">
            <img src={mlbb} />
            <h3>Turnamen Mobile Legends - Tera Esports Rookie Championship</h3>
          </div>

          <div>
            <h6>Kategori</h6>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deskripsi;
