import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {

    /// state
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate()

    /// Comportement
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue("");
        navigate(`order/${inputValue}`)
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    /// Render
    return (
        <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez Antenen Gebäudetechnik Sarl</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom"
        required
        />
        <button>accédez à votre éspace</button>
    </form>
    )
}
