import person from '../../assets/person.svg'
import './Main.css'

import { useAuthValue } from '../../contexts/AuthContext'

const Main = () => {

    const { user } = useAuthValue()

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
                            <span className='font-bold text-title'>4</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className="bi bi-archive bi-2x text-yellow"></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Número de produtos</p>
                            <span className='font-bold text-title'>3</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main