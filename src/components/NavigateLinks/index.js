import { Link } from "react-router-dom";
import './styles.css';

export default function NavigateLinks() {

    const pages = [
        {
            id: 1,
            name: 'Login',
            path: '/sign-in'
        },
        {
            id: 2,
            name: 'Cadastro',
            path: '/sign-up'
        }
    ];

    let current = window.location.pathname;

    return (
        <div className="navigate-links">
            {pages.map((page) => {
                return <Link key={page.id} className={`navigate-links-text ${current == page.path ? "current-page" : ""}`} to={page.path}>{page.name}</Link>
            })}
        </div>
    )
}