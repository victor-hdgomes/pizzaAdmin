import './Pedido.css'

// HOOKS
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Pedido = () => {
    const { id } = useParams()
    const { document: pedido, loading } = useFetchDocument("pedidos", id)

    return (
        <div className="pedido_container">
            {
                loading && <p>Loading...</p>
            }
            {
                pedido && (
                    <>
                        <h1>{pedido.nomeCliente}</h1>
                        <h4>Observações</h4>
                        <p>-- {pedido.observacao}</p>
                        <h4>Sabores escolhidos pelo cliente:</h4>
                        <div className="tags">
                            {
                                pedido.saboresArray.map((tag) => (
                                    <p key={tag}>-- {tag} </p>
                                ))
                            }
                        </div>
                        {pedido.status ? <><h4>Status: </h4><p>-- Pedido entrege</p></> : <><h4>Status: </h4><p>-- Pedido em andamento</p></>}
                        <h4>Valor total: </h4><p>-- R$ {pedido.total}</p>
                    </>
                )
            }
        </div>
    )
}

export default Pedido;