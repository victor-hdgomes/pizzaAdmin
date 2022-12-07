import './Sidebar.css'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
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

            <div className='sidebar__menu'>
                <div className='sidebar__link'>
                    <a href="#">Home</a>
                </div>
                <h2>ADMIN</h2>
                {/* <div className='sidebar__link'>
                    <a href="#">Área administrativa</a>
                </div> */}
                {/* <div className='sidebar__link'>
                    <a href="#">Lojas</a>
                </div> */}
                <div className='sidebar__link'>
                    <a href="#">Produtos</a>
                </div>
                {/* <div className='sidebar__link'>
                    <a href="#">Categorias</a>
                </div> */}
                <div className='sidebar__link'>
                    <a href="#">Pedidos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className='sidebar__link'>
                    <a href="#">Administradores</a>
                </div>
                {/* <div className='sidebar__link'>
                    <a href="#">Usuários</a>
                </div> */}
                {/* <div className='sidebar__link'>
                    <a href="#">Pagamentos e custos</a>
                </div> */}
                {/* <div className='sidebar__link'>
                    <a href="#">A plataforma</a>
                </div> */}
                <h2>OUTROS</h2>
                <div className='sidebar__link'>
                    <a href="#">Política de privacidade</a>
                </div>
                <div className='sidebar__logout'>
                    <a href="#">Log out</a>
                </div>
            </div >
        </div >
    )
}

export default Sidebar;