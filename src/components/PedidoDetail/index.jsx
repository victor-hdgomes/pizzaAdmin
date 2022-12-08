import './PedidoDetail.css'

import { Link } from 'react-router-dom';

const PedidoDetail = ({pedido}) => {
    return(
        <div className="pedido_detail">
            <p>{pedido.nomeCliente}</p>
            <p className="createdBy">{pedido.createdBy}</p>
            <div className="tags">
                {pedido.saboresArray.map((sabor)=>(
                    <p key={sabor}>{sabor} </p>
                ))}
            </div>
            <Link className='btn btn-outline' to={`/pedidos/${pedido.id}`}>Ver pedido</Link>
        </div>
    )
}

export default PedidoDetail;