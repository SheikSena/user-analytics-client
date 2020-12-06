import React from 'react';
import { Card, CardColumns } from 'react-bootstrap'
import BeerRecipes from './BeerRecipes';

export default function Dashboard() {

    return (
        <div style={{ backgroundColor: 'white', height: '100%', paddingTop: '10px', paddingRight: '10px' }}>
            <Card bg="light" text="dark">
                <Card.Header className="text-center">DASHBOARD</Card.Header>
                <Card.Body>
                    <CardColumns>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                         </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Body>
                    <BeerRecipes />
                </Card.Body>
            </Card>
        </div>
    );
}