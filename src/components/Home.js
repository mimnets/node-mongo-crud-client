import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData()

    const handleDelete = user =>{
        const agree = window.confirm('Are you sure you want to delete');
        if(agree){
            console.log('Deleting user ' + user._id)
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