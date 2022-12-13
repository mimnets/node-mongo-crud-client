import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData()
    const [displayUsers, setDisplayUsers] = useState(users)
    
    const handleDelete = user =>{
        const agree = window.confirm('Are you sure you want to delete');
        if(agree){
            // console.log('Deleting user ' + user._id)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert('User deleted')
                    const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                    setDisplayUsers(remainingUsers);
                }
            });
        }
    }
    return (
        <div>
            <h1>Users: {users.length}</h1>
            <div>
                {
                    users.map((user) => <p key={user._id}>
                        {user.name} {user.email} <button onClick={()=> handleDelete(user)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;