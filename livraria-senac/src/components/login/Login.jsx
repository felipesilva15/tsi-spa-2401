import { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = 'http://localhost:8080';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e)  => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        };

        try {
            const response = await fetch(`${baseUrl}/login`, options);

            if (!response.ok) {
                setError('Ocorreu um erro!')
                return;
            }

            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return <>
        <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
        />
        <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.password)}
            placeholder="Senha"
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p>{error}</p>}
    </>
};

export default Login;