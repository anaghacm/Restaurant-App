import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function header() {
  return (
    <div>
      <Navbar bg="rgb(0,43,54)" variant='rgb(0,43,54)'>
        <Container className='ms-3 mt-3'>
          <Navbar.Brand href="/" style={{ color: 'white', fontSize: '30px', fontStyle: 'italic', fontWeight: 'bolder' }}>

            <img
              alt=""
              src="https://i.postimg.cc/90gBKb6N/right-arrow.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Easy Leadz
            <div style={{fontSize:'12px', margin:'-10px', marginLeft:'90px'}}>Find your perfect taste!</div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default header