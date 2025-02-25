import React, { useContext, useState } from 'react';
import { GlobalContext } from './GloablState'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('Login must be used within a GlobalProvider');
    }

    const { dispatch } = context;
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/users');
            const users = response.data;

            // Check if the user exists
            const user = users.find((user: any) => user.username === username && user.password === password);


            if (username === 'admin' && password === 'admin') {
                dispatch({
                  type: 'LOGIN',
                  payload: { role: 'admin', username: 'admin' },
                });
                alert('Logged in as admin');
                navigate('/admin');
                return; // Stop further processing 
              }

            if (user) {
                // Set role based on username
                const userRole = username === 'admin' ? 'admin' : 'user';
                dispatch({ type: 'LOGIN', payload: { role: userRole, username } });
                alert(`Logged in as ${userRole}`);
                
                // Navigate to the appropriate page based on the role
                navigate(userRole === 'admin' ? '/admin' : '/home');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <><div className='login-container'>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

        </div>
        <button onClick={handleLogin}>Login</button>
        </>
         
    );
};

export default Login;

