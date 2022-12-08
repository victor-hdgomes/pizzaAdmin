import './Navbar.css'

import { NavLink } from 'react-router-dom'

import { useAuthValue } from '../../contexts/AuthContext'

const Navbar = ({ openSidebar }) => {

    const { user } = useAuthValue()

    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="bi bi-list" aria-hidden="true"></i>
            </div>

            {user &&
                <div className="navbar__left">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/produtos">Produtos</NavLink>
                    <NavLink to="/pedidos">Pedidos</NavLink>
                </div>
            }

            {!user &&
                <div className="navbar__left">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/registrar">Registrar</NavLink>
                </div>
            }
        </nav>
    )
}

export default Navbar;