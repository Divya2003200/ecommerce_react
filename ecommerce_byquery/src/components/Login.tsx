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
<<<<<<< HEAD

           
=======
 
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
            const user = users.find((user: any) => user.username === username && user.password === password);


            if (username === 'admin' && password === 'admin') {
                dispatch({
                  type: 'LOGIN',
                  payload: { role: 'admin', username: 'admin' },
                });
                alert('Logged in as admin');
                navigate('/admin');
<<<<<<< HEAD
                return; 
              }

            if (user) {
               
=======
                return; // Stop further processing 
              }

            if (user) {
            
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
                const userRole = username === 'admin' ? 'admin' : 'user';
                dispatch({ type: 'LOGIN', payload: { role: userRole, username } });
                alert(`Logged in as ${userRole}`);
                
<<<<<<< HEAD
                
=======
          
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4
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

