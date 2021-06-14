import { Card, CardBody, CardText, Col, Row } from 'reactstrap'

const Dashboard = () => {
    return (
        // Parent Card
        <Card className='shadow'>
            <CardBody>
                <Row>
                    <Col lg={3} sm={12}>
                        <Card className='bg-gradient-to-br from-green-400 to-blue-600 border-none text-light pt-12 sm:mb-2'>
                            <CardBody>   
                                <CardText>
                                    <p className='font-weight-bold'>Students</p>
                                    7653 students enrolled
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} sm={12}>
                        <Card className='bg-gradient-to-br from-red-400 to-purple-600 border-none text-light pt-12 sm:mb-2'>
                            <CardBody>   
                                <CardText>
                                    <p className='font-weight-bold'>Staff</p>
                                    45 staff employed
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} sm={12}>
                        <Card className='bg-gradient-to-br from-yellow-400 to-red-600 border-none text-light pt-12 sm:mb-2'>
                            <CardBody>   
                                <CardText>
                                    <p className='font-weight-bold'>Classes</p>
                                    <p>17 classes.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3} sm={12}>
                        <Card className='bg-gradient-to-br from-red-400 to-red-600 border-none text-light pt-12 sm:mb-2'>
                            <CardBody>   
                                <CardText>
                                    <p className='font-weight-bold'>Events</p>
                                    12 Upcoming Events
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
