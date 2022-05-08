import React, { Component, useState } from "react";
import "./style/Badan.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import mlbb from "./mlbb.png";
import imaaa from "./imaaa.jpg";
import NavbarAdmin from "./NavbarAdmin";
import Kepala from "./Kepala";

// class Form extends Component {
//   render() {
//     const Register = () => {
//       const [email, setEmail] = useState("");
//       const [password, setPassword] = useState("");
//       const [name, setName] = useState("");
//       const [contact, setContact] = useState("");

//       console.log(email);
//       return (
//         <div className="con">
//           <div className="konten">
//             <h2>Form Tournament</h2>
//             <hr></hr>
//             <div className="register-form">
//               <h1>Registrasi</h1>
//               <form>
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input
//                     type="email"
//                     class="form-control"
//                     aria-describedby="emailHelp"
//                     placeholder="randisimp@gmail.com"
//                   />
//                 </div>
//                 <div class="form-group">
//                   <label>Password</label>
//                   <input
//                     value={password}
//                     type="password"
//                     class="form-control"
//                     id="exampleInputPassword1"
//                     placeholder="Password"
//                   />
//                 </div>
//                 <div class="form-group">
//                   <label>Nama Lengkap</label>
//                   <input
//                     value={name}
//                     type="text"
//                     class="form-control"
//                     placeholder="contoh: Randi Hound"
//                   />
//                 </div>
//                 <div class="form-group">
//                   <label>No. Telfon</label>
//                   <input
//                     value={contact}
//                     type="text"
//                     class="form-control"
//                     placeholder="0812xxxx"
//                   />
//                 </div>
//                 <button type="submit" class="btn btn-primary ">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       );
//     };
//   }
// }

// export default Form;

// import React from 'react'

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  console.log(email);

  return (
    <div className="App">
      <div>
        <Kepala/>
      </div>
      <div>
        <NavbarAdmin/>
      </div>
      <div className="con">
        <div className="konten">
          <h2>Form Tournament</h2>
          <hr></hr>
          <div className="register-form">
            <form>
              <div className="form-group">
                <label>JUDUL KOMPETISI</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>DESKRIPSI KOMPETISI</label>
                <textarea class="form-control"></textarea>
              </div>
              <div class="form-group">
                <label>KATEGORI</label>
                <select class="form-control">
                  <option value="esports">E-Sports</option>

                  <option value="sports">Sports</option>

                  <option value="seni">Seni</option>

                  <option value="karya tulis">Karya Tulis</option>

                  <option value="akademik">Akademik</option>
                </select>
              </div>
              <div class="form-group">
                <label>FLYER</label>
                <input type="file" class="form-control" name="image" />
              </div>
              <button type="submit" class="btn btn-primary ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
