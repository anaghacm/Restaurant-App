import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
    return (
        <div>
            
            <Card className="text-center" style={{borderRadius:'0px'}}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>About</Card.Title>
                    <Card.Text>
                   <b> Easy Leadz</b> is a leading B2B information services company focused on the food and beverage industry, providing insight and market intelligence to business leaders in every channel consumers buy food and beverage – convenience stores, grocery retailing, restaurants and noncommercial foodservice – through media, events, data products, advisory services, and trade shows.</Card.Text>
                   
                </Card.Body>
                <Card.Footer className="text-muted">Opp.Cochin Special Economic Zone (CSEZ),
                    Seaport-Airport Road, Kakkanad.Opening Time :
                    Monday to Sunday - 11:00 AM - 02:00 AM</Card.Footer>
            </Card>
        </div>
    )
}

export default Footer