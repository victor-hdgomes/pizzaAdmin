// Styles
import './App.css';

// REACT-TOASTIFY
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

// Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// React router dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Firebase
import { onAuthStateChanged } from 'firebase/auth'

// Contexts
import { AuthProvider } from './contexts/AuthContext'

// Components
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'

// Pages
import Login from './pages/Login'
import Register from './pages/Register';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import NovoProduto from './pages/NovoProduto';
import NovoPedido from './pages/NovoPedido';
import Pedido from './pages/Pedido';
import Produto from './pages/Produto';
import EditProduto from './pages/EditProduto';
import EditPedido from './pages/EditPedido';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  const openSidebar = () => {
    setSidebarOpen(true)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className='container'>
      <ToastContainer autoClose={3000} />
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
          <Routes>
            {/* Não autenticado */}
            <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
            <Route path='/registrar' element={user ? <Navigate to="/" /> : <Register />} />

            {/* Autenticado */}
            <Route path='/' element={user ? <Main /> : <Navigate to="/login" />} />
            <Route path='/produtos' element={user ? <Produtos /> : <Navigate to="/login" />} />
            <Route path='/novoproduto' element={user ? <NovoProduto /> : <Navigate to="/login" />} />
            <Route path='/produtos/:id' element={user ? <Produto /> : <Navigate to="/login" />} />
            <Route path='/produtos/edit/:id' element={user ? <EditProduto /> : <Navigate to="/login" />} />
            <Route path='/pedidos' element={user ? <Pedidos /> : <Navigate to="/login" />} />
            <Route path='/novopedido' element={user ? <NovoPedido /> : <Navigate to="/login" />} />
            <Route path='/pedidos/:id' element={user ? <Pedido /> : <Navigate to="/login" />} />
            <Route path='/pedidos/edit/:id' element={user ? <EditPedido /> : <Navigate to="/login" />} />
          </Routes>
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
