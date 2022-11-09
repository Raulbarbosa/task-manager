import './styles.css';

export default function ErrorMessage({ message }) {
    return (
        <span className='error-message'>{message}</span>
    )
}