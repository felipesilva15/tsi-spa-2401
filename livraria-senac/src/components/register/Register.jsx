import { useState } from "react";
import { Container } from "../styles/Containers";
import { Input, Text, Title } from "../styles/Texts";
import { Button } from "../styles/Buttons";
import { Link, useNavigate } from "react-router-dom";

const baseUrl = 'http://localhost:8080'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [feedback, setFeedback] = useState({ message: '', type: '' })

    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e.target);

        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, [name]: value
        }))
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            alert('Preencha todos os campos!')
            return;
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        };

        try {
            const res = await fetch(`${baseUrl}/register`, options);

            if (!res.ok) {
                setFeedback({ message: 'Falha ao salvar os dados!', type: 'error' })
                return;
            }

            navigate('/');
        } catch (error) {
            console.log(error)
            setFeedback({ message: error.message, type: 'error' })
        }
    }

    return (
        <Container direction="column" gap="24px" width="unset">
            <h1>Tela de cadastro</h1>
            <Container gap="12px" direction="column" >
                <Input id="name" name="name" type="text" placeholder="Nome" required value={formData.name} onChange={ handleChange }/>
                <Input id="email" name="email" type="email" placeholder="E-mail" required value={formData.email} onChange={ handleChange } />
                <Input id="password" name="password" type="password" placeholder="Senha" required value={formData.password} onChange={ handleChange } />
                <Container gap="12px">
                    <Link to="/">
                        <Button type="button" backgroundColor="#e7e7e7" color="#000">Voltar</Button>
                    </Link>
                    <Button type="button" onClick={ (e) => {handleSubmit(e)} }>Salvar</Button>
                </Container>
                {
                    feedback.message && (
                        <div className={feedback.type}>
                            {feedback.type}
                        </div>
                    )
                }
            </Container>
        </Container>
    );
};

export default Register;