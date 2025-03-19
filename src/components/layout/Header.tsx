import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">SHOP</h1>
                <nav className="nav">
                    <ul className="nav-list">
                        <Link to='/'>Home</Link>
                        <Link to='/cart'>Cart</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}