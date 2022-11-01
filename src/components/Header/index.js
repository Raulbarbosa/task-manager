import { Navigate, useNavigate } from 'react-router-dom';
import Logout from '../../assets/logout.svg';
import { removeItem } from '../../utils/storage';
import './styles.css';

export function Header({ name }) {

    const navigate = useNavigate();

    const logout = () => {
        removeItem('token');
        navigate('/sign-in');
    }

    return (
        <div className="header">
            <h1>Header</h1>
            <div className='header-options'>
                <h1>Olá, {name ? name : 'Márcia'}!</h1>
                <img src={Logout} alt='Sair' onClick={logout} />
            </div>

        </div>
    )
};
