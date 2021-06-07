import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Login: React.FC = () => {

    const history = useHistory()

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if(loggedIn) {
            history.push('/') 
        }
    }, [loggedIn, history])

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log("Submitted")
    }

    return (
        <div className='flex-1 lg:mt-32 md:mt-32 sm:mt-16'>
            <Col lg={{ size: 8, offset: 2}} sm={{ size: 10, offset: 1}}>
            <Card className='pb-8 shadow'>
                <CardBody>
                    <div className='border-bottom'>
                        <div className='py-2 text-xl'>Login</div>
                    </div>
                    <Row>
                        <Col sm={{ size: 8, offset: 2}} className='mt-8'>
                            <Form onSubmit={submitHandler}>
                                <FormGroup>
                                    <Label>Email Address</Label>
                                    <Input type='email' />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type='password' />
                                </FormGroup>
                                <Button type='submit' className='btn-block' color='primary'>Log In</Button>
                                <p className='text-center text-sm text-gray-500 pt-4'>Do not have an account? Register <Link className='text-success' to='/register'>here</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            </Col>
        </div>
    )
}

export default Login
