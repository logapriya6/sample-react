import logo from './logo.svg';
import './App.css';
import { Button,Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React welcome to Atdoor
        </a>
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="fname"  align="center" placeholder="Enter Name" />
            <Form.Text className="text-muted">
                
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="Number" align="center"  placeholder="Enter age" />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control type="country" align="center" placeholder="Enter Country" />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" align="center" placeholder="Enter state" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" align="center" placeholder="Enter City Name" />
          </Form.Group><br/>
          <Button variant="success" type="submit" className="btn btn-success">
            Submit
          </Button>
        </Form>
      <br/>
       
      </header>
    </div>
  );
}

export default App;
