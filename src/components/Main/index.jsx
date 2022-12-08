import person from '../../assets/person.svg'

import './Main.css'

import { useAuthValue } from '../../contexts/AuthContext'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Main = () => {

    const { user } = useAuthValue()

    const { documents: pedidos } = useFetchDocuments("pedidos")
    const { documents: produtos } = useFetchDocuments("produtos")

    return (
        <main>
            <div className='main__container'>
                <div className='main__title'>
                    <img src={person} alt="Hello" />
                    <div className='main__greeting'>
                        <h1>Olá {user.displayName}</h1>
                        <p>Bem vindo ao seu painel admin</p>
                    </div>
                </div>

                <div className='main__cards'>
                    <div className='card'>
                        <i className="bi bi-file-earmark-text bi-2x text-lightblue"></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Número de pedidos</p>
                            <span className='font-bold text-title'>{pedidos ? pedidos.length : 0}</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className="bi bi-archive bi-2x text-yellow"></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Número de produtos</p>
                            <span className='font-bold text-title'>{produtos ? produtos.length : 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main