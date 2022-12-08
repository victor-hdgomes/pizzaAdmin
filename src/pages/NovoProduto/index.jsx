import './NovoProduto.css'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuthValue } from '../../contexts/AuthContext'

import { useInsertDocument } from '../../hooks/useInsertDocument'

import { toast } from "react-toastify"

const NovoProduto = () => {

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [custo, setCusto] = useState(null)
    const [venda, setVenda] = useState(null)
    const [formError, setFormError] = useState("")

    const { user } = useAuthValue()

    const { insertDocument, response } = useInsertDocument("produtos")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormError("")

        insertDocument({
            nome,
            descricao,
            custo,
            venda,
            estoque: true,
            createdBy: user.displayName
        })

        toast.success("Produto criado com sucesso.")

        navigate("/")
    }

    return (
        <div className="novoproduto">
            <h2>Criar novo produto</h2>
            <p>Crie um novo produto para impulsionar suas vendas.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name='nome' required placeholder='Nome do produto' value={nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <label>
                    <span>Descrição:</span>
                    <input type="text" name='descricao' required placeholder='Descrição do produto' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </label>
                <label>
                    <span>Preço de custo:</span>
                    <input type="number" name='custo' required placeholder='Preço de custo do produto' value={custo} onChange={(e) => setCusto(e.target.value)} />
                </label>
                <label>
                    <span>Preço de venda:</span>
                    <input type="number" name='venda' required placeholder='Preço de venda do produto' value={venda} onChange={(e) => setVenda(e.target.value)} />
                </label>
                {!response.loading && <button className='btn'>Criar produto</button>}
                {response.loading && <button className='btn' disabled>Espere...</button>}
                {response.error && <p className='error'>{response.error}</p>}
            </form>
        </div>
    )
}

export default NovoProduto;