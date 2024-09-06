import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRestuarant } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <>
      <Navbar variant='dark mt-3'>
        <Container>
          <Link to='/' style={{textDecoration:'none',overflowY:'hidden'}}>
            <div>
            <Navbar.Brand className='d-flex jusify-content-between align-items-center'>
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHoJJY2IaTAquBMtgjjtUQMBEvJUJztNYAA&s"
                width="30"
                height="30"
                className="d-inline-block align-top me-3"
              />{' '}
              FOOD <span className='text-warning'>CIRCLE</span>
              <input type="text" className='form-control ms-5' style={{width:'300px'}} placeholder='Search my Neighborhood' 
              onChange={(e)=>dispatch(searchRestuarant(e.target.value))}/>
            </Navbar.Brand>
            </div>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header