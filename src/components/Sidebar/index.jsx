import './Sidebar.css'

import { Link } from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthentication'

import { useAuthValue } from '../../contexts/AuthContext'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {

    const { user } = useAuthValue()

    const { logOut } = useAuthentication()

    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className='sidebar__title'>
                <div className='sidebar__logo'>
                    <h1>PIZZA.</h1>
                </div>

                <i
                    onClick={() => closeSidebar()}
                    id='sidebarIcon'
                    aria-hidden="true"
                    className='bi bi-x-lg'
                >
                </i>
            </div>

            {!user &&
                <div className='sidebar__menu'>
                    <p className='sidebar__p'>Bem vindo a area administrativa da PIZZA.</p>
                    <br />
                    <p className='sidebar__p'>Faça seu login para ter acesso a todas as informações.</p>
                </div >
            }

            {user &&
                <div className='sidebar__menu'>
                    <div className='sidebar__link'>
                        <Link to="/">Home</Link>
                    </div>
                    <h2>Produtos</h2>
                    <div className='sidebar__link'>
                        <Link to="/produtos">Listar produtos</Link>
                    </div>
                    <div className='sidebar__link'>
                        <Link to="/novoproduto">Criar produto</Link>
                    </div>
                    <h2>Pedidos</h2>
                    <div className='sidebar__link'>
                        <Link to="/pedidos">Listar pedidos</Link>
                    </div>
                    <div className='sidebar__link'>
                        <Link to="/novopedido">Criar pedido</Link>
                    </div>
                    <div className='sidebar__logout'>
                        <button onClick={logOut}>Log out</button>
                    </div>
                </div >
            }
        </div >
    )
}

export default Sidebar;