import './EditPedido.css'

import { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { useAuthValue } from '../../contexts/AuthContext'

import {useUpdateDocument} from '../../hooks/useUpdateDocument'

import { toast } from "react-toastify"

import { useFetchDocument } from '../../hooks/useFetchDocument'

const EditPedido = () => {

    const { id } = useParams()
    const { document: pedido } = useFetchDocument("pedidos", id)

    const [nomeCliente, setNomeCliente] = useState("")
    const [observacao, setObservacao] = useState("")
    const [total, setTotal] = useState(null)
    const [sabores, setSabores] = useState([])
    const [formError, setFormError] = useState("")

    useEffect(() => {
        if (pedido) {
            setNomeCliente(pedido.nomeCliente)
            setObservacao(pedido.observacao)
            setTotal(pedido.total)

            const textSabores = pedido.saboresArray.join(", ")

            setSabores(textSabores)
        }
    }, [pedido])

    const { user } = useAuthValue()

    const { updateDocument, response } = useUpdateDocument("pedidos")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormError("")

        const saboresArray = sabores.split(",").map((sabor) => sabor.trim().toLowerCase())

        if (!nomeCliente || !observacao || !total || !sabores) {
            setFormError("Preencha todos os campos.")
        }

        if (formError) return;

        updateDocument(id, {
            nomeCliente,
            observacao,
            saboresArray,
            total,
            status: false,
            createdBy: user.displayName
        })

        toast.success("Produto criado com sucesso.")

        navigate("/pedidos")
    }

    return (
        <div className="novopedido">
            <h2>Editar pedido</h2>
            <p>Editando pedido do: {pedido.nomeCliente}.</p>
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
                    <span>Observação:</span>
                    <textarea name="observacao" id="observacao" required placeholder="Observação do pedido" value={observacao} onChange={(e) => setObservacao(e.target.value)} ></textarea>
                </label>
                <label>
                    <span>Total:</span>
                    <input type="number" name='total' required placeholder='Valor do pedido' value={total} onChange={(e) => setTotal(e.target.value)} />
                </label>
                {!response.loading && <button className='btn'>Editar pedido</button>}
                {response.loading && <button className='btn' disabled>Espere...</button>}
                {response.error && <p className='error'>{response.error}</p>}
            </form>
        </div>
    )
}

export default EditPedido;