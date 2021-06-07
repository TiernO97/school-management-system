import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Alert, Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Register: React.FC = () => {

    const history = useHistory()

    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    //Fields
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    useEffect(() => {
        if(loggedIn) {
            history.push('/') 
        }
    }, [loggedIn, history])

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setError('')

        if(password !== password2) {
            setError('Passwords must match!')
        }

        setSuccess('Validation Passed')
    }

    return (
        <div className='flex-1 lg:mt-32 md:mt-32 sm:mt-16'>
            <Col lg={{ size: 8, offset: 2}} sm={{ size: 10, offset: 1}}>
            <Card className='pb-8 shadow'>
                <CardBody>
                    <div className='border-bottom'>
                        <div className='py-2 text-xl'>Register</div>
                    </div>
                    <Row>
                        <Col sm={{ size: 8, offset: 2}} className='mt-8'>
                            <Form onSubmit={submitHandler}>
                                {!!error && <Alert color='danger' className='p-1 text-center'>{error}</Alert>}
                                {!!success && <Alert color='success' className='p-1 text-center'>{success}</Alert>}
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input type='text' value={name} onChange={e => setName(e.target.value)} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email Address</Label>
                                    <Input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Confirm Password</Label>
                                    <Input type='password' value={password2} onChange={e => setPassword2(e.target.value)} required />
                                </FormGroup>
                                <Button type='submit' className='btn-block' color='primary'>Register</Button>
                            </Form>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            </Col>
        </div>
    )
}

export default Register
