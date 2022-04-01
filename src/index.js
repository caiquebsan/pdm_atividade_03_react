import React from 'react'
import ReactDOM from 'react-dom'
import foto from './images/pexels-photo-5019706.jpeg'
import './styles.css'

require('dotenv').config()

let cssJSON = () => { return {margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12,
borderRadius: 8, borderColor: 'gray', borderStyle: 'solid', 
borderWidth: 'thin'}}

let medicos = {medico1: "José da Silva", medico2: "Maria da Silva", medico3: "Jaqueline Mendes"}

const App = () => {
    return (
    <div style={cssJSON()}> Profissionais de Saúde
        <div style={{margin: 'auto', width: 738, backgroundColor: '#EEE', 
        padding: 12,  borderRadius: 8, borderColor: 'gray', borderStyle: 'solid', 
        borderWidth: 'thin', height: 180}}> 
            <div className='caixa'>
                <img src={process.env.FOTO_MEDICO} className='imagem'/>
                <label>{medicos.medico1}</label>
            </div>
            <div className='caixa'>
                <img src={foto} 
                className='imagem' />
                <label>{medicos.medico2}</label>
            </div>
            <div className='caixa'>
                <img src="https://images.pexels.com/photos/11560987/pexels-photo-11560987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                className='imagem' />
                <label>{medicos.medico3}</label>
            </div>
        </div>
        {process.env.TESTE}
    </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)