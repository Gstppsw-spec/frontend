import React, { Component } from "react";
import "./style/Badan.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import mlbb from "./mlbb.png";
import imaaa from "./imaaa.jpg";
import { Button } from "react-bootstrap";
import NavbarAdmin from "./NavbarAdmin";
import Kepala from "./Kepala";

class BadanAdmin extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Kepala />
        </div>
        <div>
          <NavbarAdmin />
        </div>
        <div className="con">
          <div className="konten">
            <h2>E-SPORTS</h2>
            <hr></hr>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={mlbb} height="300" />
                <Card.Body>
                  <Card.Title>
                    Turnamen Mobile Legends - Tera Esports Rookie Championship
                  </Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary" className="ganti">
                  Edit
                </Button>
                <Button variant="primary" className="hapus">
                  Delete
                </Button>
              </Card>
              <Card>
                <Card.Img variant="top" src={imaaa} height="300" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Button variant="primary" className="ganti">
                  Edit
                </Button>
                <Button variant="primary" className="hapus">
                  Delete
                </Button>
              </Card>
              <Card>
                <Card.Img variant="top" src={mlbb} height="300" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary" className="ganti">
                  Edit
                </Button>
                <Button variant="primary" className="hapus">
                  Delete
                </Button>
              </Card>
              <Card>
                <Card.Img variant="top" src={mlbb} height="300" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary" className="ganti">
                  Edit
                </Button>
                <Button variant="primary" className="hapus">
                  Delete
                </Button>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default BadanAdmin;
