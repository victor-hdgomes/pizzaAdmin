import './EditProduto.css'

import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { useAuthValue } from '../../contexts/AuthContext'

import {useUpdateDocument} from '../../hooks/useUpdateDocument'

import { toast } from "react-toastify"

import { useFetchDocument } from '../../hooks/useFetchDocument'

const EditProduto = () => {

    const { id } = useParams()
    const { document: produto } = useFetchDocument("produtos", id)

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [custo, setCusto] = useState(null)
    const [venda, setVenda] = useState(null)
    const [formError, setFormError] = useState("")

    useEffect(() => {
        if (produto) {
            setNome(produto.nome)
            setDescricao(produto.descricao)
            setCusto(produto.custo)
            setVenda(produto.venda)
        }
    }, [produto])

    const { user } = useAuthValue()

    const { updateDocument, response } = useUpdateDocument("produtos")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormError("")

        updateDocument(id, {
            nome,
            descricao,
            custo,
            venda,
            estoque: true,
            updatedBy: user.displayName
        })

        toast.success("Produto editado com sucesso.")

        navigate("/produtos")
    }

    return (
        <div className="novoproduto">
            {produto && (
                <>
                    <h2>Editar produto</h2>
                    <p>Editando: {produto.nome}.</p>
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
                        {!response.loading && <button className='btn'>Editar produto</button>}
                        {response.loading && <button className='btn' disabled>Espere...</button>}
                        {response.error && <p className='error'>{response.error}</p>}
                    </form></>
            )}
        </div>
    )
}

export default EditProduto;