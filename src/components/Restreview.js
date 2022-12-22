import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Restreview(reviews) {
    const [open, setOpen] = useState(false);
    // console.log(reviews)
    return (
        <>
            {
                <><Button variant='dark'
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Reviews
                </Button><Collapse in={open}>
                        <div id="example-collapse-text">
                            {
                                reviews.reviews.map(item => (
                                    <div className='mb-5'>
                                        <h6>{item.name} <span className='ms-5'>{item.date}</span></h6>
                                        <p>Rating : {item.rating}</p>
                                        <h6>Review : {item.comments}</h6>
                                    </div>
                                ))
                            }
                        </div>
                    </Collapse></>
            }
        </>
    )
}

export default Restreview