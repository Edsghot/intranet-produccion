import React from 'react'
import { Link } from 'react-router-dom'

function BarGerencia() {
  return (
    <body className='bg-[#161616] text-[#fff] mt-[90px] h-[60px] text-center'>
        <div className='text-center flex items-center mx-4 my-2 gap-4'>
            <Link to="/tesoreria">Tesoreria</Link>
            <Link to="/licitaciones">Licitaciones</Link>
            <Link to="/obras">Obras</Link>
            <Link to="/chat-legal">Abogado</Link>
            <Link>#</Link>
            
        </div>
    </body>
  )
}

export default BarGerencia