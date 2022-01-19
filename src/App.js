
import './App.css';
import { Button,Form } from 'react-bootstrap';
import React,{useState} from 'react'
function App() {
  const[name,setName]=useState("")
  const[age,setAge]=useState(0)
  const[country,setCountry]=useState("")
  const[state,setState]=useState("")
  const[city,setCity]=useState("")
  
  const handleNameClick=(event)=> {
    setName(event.target.value)
  }
  const handleAgeClick=(event)=>{
    setAge(event.target.value)
  }
  const handleCountryClick=(event)=>{
    setCountry(event.target.value)
  }
  const handleStateClick=(event)=>{
    setState(event.target.value)
  }
  const handleCityClick=(event)=>{
    setCity(event.target.value)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="fname"  align="center" placeholder="Enter Name"  onChange={handleNameClick} />{name}
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicAge">
    <Form.Label>Age</Form.Label>
    <Form.Control type="Number" align="center"  placeholder="Enter age" onChange={handleAgeClick} />{age}
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCountry">
    <Form.Label>Country</Form.Label><br/>
    <Form.Control type="country" align="center" placeholder="Enter Country" onChange={handleCountryClick} />{country}
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicState">
    <Form.Label>State</Form.Label>
    <Form.Control type="text" align="center" placeholder="Enter state" onChange={handleStateClick} />{state}
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label>City</Form.Label>
    <Form.Control type="text" align="center" placeholder="Enter City Name" onChange={handleCityClick} />{city}
  </Form.Group><br/>

  <Button type="button" className="btn btn-success">Submit</Button>
</Form>
<br/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>React @ Atdoor</b>
        </a>
      </header>
    </div>
  );
}

export default App;