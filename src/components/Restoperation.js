import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restoperation(operate) {
    // console.log(operate)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {
                <><Button variant="dark" className='mt-5 mb-5 me-5' onClick={handleShow}>
                    Operating Hours
                </Button><Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Operating Hours</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup>
                                <ListGroup.Item>Monday : {operate.operate.Monday}</ListGroup.Item>
                                <ListGroup.Item>Tuesday : {operate.operate.Tuesday}</ListGroup.Item>
                                <ListGroup.Item>Wednesday : {operate.operate.Wednesday}</ListGroup.Item>
                                <ListGroup.Item>Thursday : {operate.operate.Thursday}</ListGroup.Item>
                                <ListGroup.Item>Friday : {operate.operate.Friday}</ListGroup.Item>
                                <ListGroup.Item>Saturday : {operate.operate.Saturday}</ListGroup.Item>
                                <ListGroup.Item>Sunday : {operate.operate.Sunday}</ListGroup.Item>
                            </ListGroup>
                        </Modal.Body>
                    </Modal></>
            }
        </>
    )
}

export default Restoperation