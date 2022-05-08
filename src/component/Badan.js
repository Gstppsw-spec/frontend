import React, { Component } from "react";
import "./style/Badan.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import mlbb from "./mlbb.png";
import imaaa from "./imaaa.jpg";
import { Button } from "react-bootstrap";
import Kepala from "./Kepala";
import Navbar from "./Navbar";

class Badan extends Component {
  render() {
    return (
      <div>
        <div>
          <Kepala />
        </div>
        <div>
          <Navbar />
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
                <Button variant="primary">Read More</Button>
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
                <Button variant="primary">Read More</Button>
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
                <Button variant="primary">Read More</Button>
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
                <Button variant="primary">Read More</Button>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Badan;
