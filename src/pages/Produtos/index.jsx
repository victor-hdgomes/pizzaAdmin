import './Produtos.css'

import { Link } from "react-router-dom"

// HOOKS
import { useAuthValue } from '../../contexts/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'

const Produtos = () => {
    const { user } = useAuthValue()
    const uid = user.uid

    const { documents: produtos, loading } = useFetchDocuments("produtos")

    const { deleteDocument } = useDeleteDocument("produtos")

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='pedidos'>
            <div className='dashboard'>
                <h2>Produtos</h2>
                <p>Gerencie seus produtos de uma maneira fácil</p>
                {
                    produtos && produtos.length === 0 ? (
                        <div className="nopedidos">
                            <p>Produto não encontrado</p>
                            <Link to="/novoproduto" className="btn">Criar produto</Link>
                        </div>
                    ) : (
                        <>
                            <div className="post_header">
                                <span>Nome do produto</span>
                                <span>Ações</span>
                            </div>

                            {
                                produtos && produtos.map((produto) => (
                                    <div key={produto.id} className="post_row">
                                        <p>{produto.nome}</p>
                                        <div>
                                            <Link to={`/produtos/${produto.id}`} className="btn btn-outline" >Info</Link>
                                            <Link to={`/produtos/edit/${produto.id}`} className="btn btn-outline" >Editar</Link>
                                            <button onClick={() => deleteDocument(produto.id)} className="btn btn-outline btn-danger">Deletar</button>
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

export default Produtos;