import './Produto.css'

// HOOKS
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

const Produto = () => {
    const { id } = useParams()
    const { document: produto, loading } = useFetchDocument("produtos", id)

    return (
        <div className="pedido_container">
            {
                loading && <p>Carregando...</p>
            }
            {
                produto && (
                    <>
                        <h1>{produto.nome}</h1>
                        <h4>Descrição</h4>
                        <p>-- {produto.descricao}</p>
                        <h4>Em estoque:</h4>
                        {produto.estoque ? <p>-- Em estoque</p> : <p>-- Produto em falta</p>}
                        <h4>Preço de custo:</h4>
                        <p>-- R$ {produto.custo}</p>
                        <h4>Preço de venda:</h4>
                        <p>-- R$ {produto.venda}</p>
                    </>
                )
            }
        </div>
    )
}

export default Produto;