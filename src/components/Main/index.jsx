import person from '../../assets/person.svg'
import './Main.css'

const Main = () => {
    return (
        <main>
            <div className='main__container'>
                <div className='main__title'>
                    <img src={person} alt="Hello" />
                    <div className='main__greeting'>
                        <h1>Olá Victor</h1>
                        <p>Bem vindo ao seu painel admin</p>
                    </div>
                </div>

                <div className='main__cards'>
                    <div className='card'>
                        <i class="bi bi-file-earmark-text bi-2x text-lightblue"></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Número de pedidos</p>
                            <span className='font-bold text-title'>578</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i class="bi bi-cash-coin bi-2x text-red"></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Pagamentos</p>
                            <span className='font-bold text-title'>R$2.467</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i class="bi bi-archive bi-2x text-yellow"></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Número de produtos</p>
                            <span className='font-bold text-title'>670</span>
                        </div>
                    </div>

                    {/* <div className='card'>
                        <i class="bi bi-bar-chart-line-fill bi-2x text-green"></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Categorias</p>
                            <span className='font-bold text-title'>40</span>
                        </div>
                    </div> */}
                </div>

                <div className='charts'>
                    {/* <div className='charts__left'>
                        <div className='charts__left__title'>
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Ubatuba, São Paulo, BR</p>
                            </div>
                            <i class="bi bi-currency-dollar"></i>
                        </div>
                    </div> */}



                    <div className='charts__rigth'>
                        <div className='charts__rigth__title'>
                            <div>
                                <h1>Informações</h1>
                                <p>Informações importantes para o seu negócio</p>
                            </div>
                            <i class="bi bi-bar-chart"></i>
                        </div>
                        <div className='charts__right_cards'>
                            <div className='card1'>
                                <h1>Entrada</h1>
                                <p>R$2500</p>
                            </div>
                            {/* <div className='card2'>
                                <h1>Pagamentos</h1>
                                <p>R$250,00</p>
                            </div> */}
                            {/* <div className='card3'>
                                <h1>Custos de hospedagens</h1>
                                <p>R$150,00</p>
                            </div> */}
                            {/* <div className='card4'>
                                <h1>Banco de dados</h1>
                                <p>R$180,00</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main