import React from 'react'
import { Users } from 'react-feather'
import { Card, CardBody, CardTitle, CardText, Col, Row, CardHeader } from 'reactstrap'
import './Dashboard.css'

const Dashboard = () => {
    return (
        // Parent Card
        <Card className='shadow'>
            <CardBody>
                <Row>
                    <Col lg={4} sm={12}>
                        <Card className='bg-primary border-none text-light'>
                            <CardBody>   
                                <CardText className='pb-2'>
                                    <strong>Students</strong>
                                </CardText>
                                <CardText>
                                    <p>7653 students enrolled.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card className='bg-success border-none text-light'>
                            <CardBody>   
                                <CardText className='pb-2'>
                                    <strong>Staff</strong>
                                </CardText>
                                <CardText>
                                    <p>45 staff employed.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card className='bg-danger border-none text-light'>
                            <CardBody>   
                                <CardText className='pb-2'>
                                    <strong>Classes</strong>
                                </CardText>
                                <CardText>
                                    <p>17 classes.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default Dashboard
