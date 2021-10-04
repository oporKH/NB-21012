
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 

import CreateCar from './components/create-car.component'
import EditCar from './components/edit-car.component';
import CarList from './components/car-list.component';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar bg="dark" variant="dark">
          <Container>
            <NavBar.Brand>
              <Link to={"/create-car"} className="nav-link">
              Car Managament
              </Link>
            </NavBar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-car"} class="nav-link">
                  Create Car
                </Link>
              </Nav>
              <Nav>
                <Link to={"/car-list"} class="nav-link">
                  Car List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </NavBar>

        <Container>
          <Row>
            <Col md="12">
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" conponent={CreateCar} />
                  <Route path="/create-car" conponent={CreateCar} />
                  <Route path="/edit-car/:id" conponent={EditCar} />
                  <Route path="/car-list" conponent={CarList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
