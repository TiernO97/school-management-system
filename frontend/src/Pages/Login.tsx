import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const Login: React.FC = () => {

    const history = useHistory()

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if(loggedIn) {
            history.push('/') 
        }
    }, [loggedIn, history])

    return (
        <div>
            Log In Page
        </div>
    )
}

export default Login
