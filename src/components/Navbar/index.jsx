import './Navbar.css'

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i class="bi bi-list" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link">Admin</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i class="bi bi-search"></i>
                </a>
                <a href="#">
                    <i class="bi bi-clock"></i>
                </a>
                <a href="#">
                    <i class="bi bi-person-circle"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;