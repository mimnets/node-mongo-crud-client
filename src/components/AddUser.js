import React from 'react';
import { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});

    const handleAddUser = (event) => {
        event.preventDefault();
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User added successfully');
                event.target.reset();
            }
        })
    }

    const handleInputBlur = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h1>Add a user</h1>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name="name" id="" placeholder='Name' required/>
                <br/>
                <input onBlur={handleInputBlur} type="text" name="address" id="" placeholder='Address' required/>
                <br/>
                <input onBlur={handleInputBlur} type="email" name="email" id="" placeholder='Email' required/>
                <br/>
                <button>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;