import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginPage from '../components/LoginPage'

const AuthPage = () => {

    const [login, setLogin] = useState(true)

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            {login ? <LoginPage state={setLogin} /> : <RegisterForm state={setLogin} />}
        </div>
    )
}

export default AuthPage