import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { Row, Col, Container } from 'react-bootstrap';
function App() {

  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        {/* <Col xs={1}>

        </Col> */}
        <Col xs={10}>
          <Home />
        </Col>
      </Row>
      {/* <Footer /> */}
    </div >
  );
}

export default App;
