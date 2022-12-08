import './Pedidos.css'

import { Link } from "react-router-dom"

// HOOKS
import { useAuthValue } from '../../contexts/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const Pedidos = () => {
    const { user } = useAuthValue()
    const uid = user.uid

    const { documents: pedidos, loading } = useFetchDocuments("pedidos")

    const { deleteDocument } = useDeleteDocument("pedidos")

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='pedidos'>
            <div className='dashboard'>
                <h2>Pedidos</h2>
                <p>Gerencie seus pedidos de uma maneira fácil</p>
                {
                    pedidos && pedidos.length === 0 ? (
                        <div className="nopedidos">
                            <p>Pedido não encontrado</p>
                            <Link to="/novopedido" className="btn">Criar pedidos</Link>
                        </div>
                    ) : (
                        <>
                            <div className="post_header">
                                <span>Nome do cliente</span>
                                <span>Ações</span>
                            </div>

                            {
                                pedidos && pedidos.map((pedido) => (
                                    <div key={pedido.id} className="post_row">
                                        <p>{pedido.nomeCliente}</p>
                                        <div>
                                            <Link to={`/pedidos/${pedido.id}`} className="btn btn-outline" >Info</Link>
                                            <Link to={`/pedidos/edit/${pedido.id}`} className="btn btn-outline" >Editar</Link>
                                            <button onClick={() => deleteDocument(pedido.id)} className="btn btn-outline btn-danger">Deletar</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Pedidos;