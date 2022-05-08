import logo from './logo.svg';
import './App.css';
import NavbarAdmin from './component/NavbarAdmin';
import Kepala from './component/Kepala';
import  Navbar   from './component/Navbar';
import Badan from './component/Badan';
import Form from './component/Form';
import Deskripsi from './component/Deskripsi';
import Perloginan from './component/Perloginan';
import BadanAdmin from './component/BadanAdmin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router >
      <div className="app-header">
        <Badan />
      </div>
      <Switch>
        <div className="app-content">
          <Route path="/deskripsi" exact component={Deskripsi} />
          <Route path="/perloginan" exact component={Perloginan} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
