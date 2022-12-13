import React from 'react';
import { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});

    const handleAddUser = (event) => {
        event.preventDefault();
        console.log(user);
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
                <input onBlur={handleInputBlur} type="text" name="name" id="" placeholder='Name'/>
                <br/>
                <input onBlur={handleInputBlur} type="email" name="email" id="" placeholder='Email'/>
                <br/>
                <button>Add User</button>
            </form>
        </div>
    );
};

export default AddUser;