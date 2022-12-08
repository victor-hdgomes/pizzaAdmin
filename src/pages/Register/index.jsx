import './Register.css'

import { useEffect, useState } from 'react';

import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName, email, password
        }

        function validateEmail(email) {
            let re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (!validateEmail(email)) {
            setError("Digite um email válido!")
            return
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser a mesma!")
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(()=>{
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className="register">
            <h1>Registre um administrador!</h1>
            <p>Crie mais um administrador para impulsionar seu negócio.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" id="displayName" placeholder="Digite seu nome" required value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" id="email" placeholder="Digite seu email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmação de senha" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                {!loading && <button className='btn'>Registrar</button>}
                {loading && <button className='btn' disabled>Espere...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register;