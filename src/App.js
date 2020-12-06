import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { Col, Row } from 'react-bootstrap';
function App() {

  return (
    <div>
      <Header />
      <Sidebar />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
