import './NovoPedido.css'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuthValue } from '../../contexts/AuthContext'

import { useInsertDocument } from '../../hooks/useInsertDocument'

import { toast } from "react-toastify"

const NovoProduto = () => {

    const [nomeCliente, setNomeCliente] = useState("")
    const [observacao, setObservacao] = useState("")
    const [total, setTotal] = useState(null)
    const [sabores, setSabores] = useState([])
    const [formError, setFormError] = useState("")

    const { user } = useAuthValue()

    const { insertDocument, response } = useInsertDocument("pedidos")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormError("")

        const saboresArray = sabores.split(",").map((sabor) => sabor.trim().toLowerCase())

        if (!nomeCliente || !observacao || !total || !sabores) {
            setFormError("Preencha todos os campos.")
        }

        if (formError) return;

        insertDocument({
            nomeCliente,
            observacao,
            saboresArray,
            total,
            status: false,
            createdBy: user.displayName
        })

        toast.success("Pedido criado com sucesso.")

        navigate("/pedidos")
    }

    return (
        <div className="novopedido">
            <h2>Criar novo pedido</h2>
            <p>Crie um novo pedido para impulsionar suas vendas.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome do cliente:</span>
                    <input type="text" name='nomeCliente' required placeholder='Nome do produto' value={nomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
                </label>
                <label>
                    <span>Sabores:</span>
                    <input type="text" name='sabores' required placeholder='Preencha os sabores com a separacao em virgula' value={sabores} onChange={(e) => setSabores(e.target.value)} />
                </label>
                <label>
                    <span>Observa????o:</span>
                    <textarea name="observacao" id="observacao" required placeholder="Observa????o do pedido" value={observacao} onChange={(e) => setObservacao(e.target.value)} ></textarea>
                </label>
                <label>
                    <span>Total:</span>
                    <input type="number" name='total' required placeholder='Valor do pedido' value={total} onChange={(e) => setTotal(e.target.value)} />
                </label>
                {!response.loading && <button className='btn'>Criar pedido</button>}
                {response.loading && <button className='btn' disabled>Espere...</button>}
                {response.error && <p className='error'>{response.error}</p>}
            </form>
        </div>
    )
}

export default NovoProduto;