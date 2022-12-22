import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';

function Vierestaurant() {
    const params = useParams()
    // console.log(params.id)


    //to hold value
    const [allrestaurants, setRestaurants] = useState([])      //to store data from json file in array form

    //Function to call API to get all restaurant items from restaurants.json
    const getRestaurants = async () => {
        await fetch('/restaurants.json')
            .then((data) => {
                data.json()
                    .then((result) => {
                        // console.log(result);
                        setRestaurants(result.restaurants);
                    })
            })
    }
    useEffect(() => {
        getRestaurants()
    }, [])

    const viewrest = allrestaurants.find(item => item.id == params.id)
    // console.log(viewrest)
    return (
        <>
            {
                viewrest ?
                    (
                        < Row >
                            <Col className='m-5 p-5' sm={12} md={6} lg={4} xl={3}>
                                <Image className='rounder' src={viewrest.photograph} fluid />
                            </Col>
                            <Col className='m-5 p-5'>
                              <p className='mt-5'>ID : {viewrest.id}</p>
                                <h4><b>Name : {viewrest.name}</b></h4>
                                <h5>Neighborhood : {viewrest.neighborhood}</h5>
                                <h6>Address : {viewrest.address}</h6>
                                <h6>Cuisine type : {viewrest.cuisine_type}</h6>
                                <Restoperation operate={viewrest.operating_hours} />
                                <Restreview reviews={viewrest.reviews} />
                            </Col>
                        </Row>
                    ) : 'null'
            }
        </>
    )
}

export default Vierestaurant