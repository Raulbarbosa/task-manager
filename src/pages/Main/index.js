import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import './styles.css';

function Main(){
    return (
        <div className='container-main'>
            <Routes>
                <Route path='/'>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-in" element={<SignIn />} />
                </Route>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes> 
        </div>
    )
};

export default Main;