import React, { useState } from 'react'

export default function LoginForm() {

    /// state
    const [inputValue, setInputValue] = useState("");

    /// Comportement
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bonjour ${inputValue}`);
        setInputValue("");
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    /// Render
    return (
        <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous!</h1>
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
