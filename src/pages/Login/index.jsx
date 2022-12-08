import './Login.css'

import { useState, useEffect } from 'react';

import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { logIn, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            email, password
        }

        function validateEmail(email) {
            let re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (!validateEmail(email)) {
            setError("Email inválido!")
            return
        }

        const res = await logIn(user)

        console.log(res)
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className="login">
            <h1>Login!</h1>
            <p>Faça o login para usar o sistema.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" id="email" placeholder="Digite seu email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                {!loading && <button className='btn'>Login</button>}
                {loading && <button className='btn' disabled>Espere...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Login;