import React, { useEffect } from 'react'
import { useState } from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantlistAction } from '../Actions/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {

  //to hold value
  const [allrestaurants, setRestaurants] = useState([])      //to store data from json file in array form

  //Function to call API to get all restaurant items from restaurants.json
  // const getRestaurants = async () => {
  //   await fetch('/restaurants.json')
  //     .then((data) => {
  //       data.json()
  //         .then((result) => {
  //           // console.log(result);
  //           setRestaurants(result.restaurants);
  //         })
  //     })
  // }

  const dispatch=useDispatch()
  const result=useSelector(state=>state.restaurantReducer)
  console.log(result)
  const {restaurantList}=result

  useEffect(() => {
    // getRestaurants()
    dispatch(RestaurantlistAction())
  }, [])

  return (
    <Row>
      {
        restaurantList.map(item => (
          // <h4>{item.name}</h4>
          <Col  className='my-3' sm={12} md={6} lg={4} xl={3}>
            <Restaurantcards restaurant={item} />
          </Col>
        ))
      }
    </Row>
  )
}

export default Restaurantlist