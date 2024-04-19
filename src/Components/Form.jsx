// Form.jsx
import { useState } from "react";

export default function Form () {
    // State for our user
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        zip: "",
        email: "",
        password: "",
    });


    // function to handle text change
    const handleTextChange = (event) => {
        const {id, value} = event.target;
        setUser({...user, [id]: value})
    }

    // function to reset our form after submission
    const resetForm = () => {
        setUser({
            firstName: "",
            lastName: "",
            zip: "",
            email: "",
            password: "",
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        resetForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name: </label>
            <input
                type="text"
                value={user.firstName}
                onChange={handleTextChange}
                id="firstName"
            />
            <label>Last Name: </label>
            <input
                type="text"
                value={user.lastName}
                onChange={handleTextChange}
                id="lastName"
            />
            <label>Zip: </label>
            <input type="number" value={user.zip} onChange={handleTextChange} id="zip" />
            <label>Email: </label>
            <input
                type="email"
                value={user.email}
                onChange={handleTextChange}
                id="email"
            />
            <label>Password:</label>
            <input
                type="password"
                value={user.password}
                onChange={handleTextChange}
                id="password"
            />

            <input type="submit" />
        </form>
    )
}