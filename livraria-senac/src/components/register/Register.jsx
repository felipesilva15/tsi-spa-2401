import { useState } from "react";
import { Container } from "../styles/Containers";
import { Input, Text, Title } from "../styles/Texts";
import { Button } from "../styles/Buttons";
import { Link, useNavigate } from "react-router-dom";

const baseUrl = 'http://localhost:8000'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            alert('Preencha todos os campos!')
            return;
        }

        const data = { name, email, password };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        };

        try {
            const res = await fetch(`${baseUrl}/register`, options);

            if (!res.ok) {
                alert('Falha ao salvar os dados!')
                return;
            }

            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container direction="column" gap="24px" width="unset">
            <h1>Tela de cadastro</h1>
            <Container gap="12px" direction="column" >
                <Input type="text" placeholder="Nome"  value={name} onChange={ (e) => setName(e.target.value) }/>
                <Input type="email" placeholder="E-mail"  value={email} onChange={ (e) => setEmail(e.target.value) } />
                <Input type="password" placeholder="Senha"  value={password} onChange={ (e) => setPassword(e.target.value) } />
                <Container gap="12px">
                    <Link to="/">
                        <Button type="button" backgroundColor="#e7e7e7" color="#000">Voltar</Button>
                    </Link>
                    <Button type="button" onClick={ (e) => {handleSubmit(e)} }>Salvar</Button>
                </Container>
            </Container>
        </Container>
    );
};

export default Register;