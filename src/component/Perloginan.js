import React from "react";
import "./style/Perloginan.css";

const Perloginan = () => {
  return (
    <div className="hole">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="judul">
              <h3>SSO LOGIN</h3>
            </div>
            <div className="isian">
              <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Masukan username anda"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              {/* <div class="form-check">
                <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
                <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
              </div> */}
              <button type="submit" class="btn btn-primary btn-lg btn-block">
                LOGIN
              </button>
            </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perloginan;
