import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <body className='bg-[#FFF] min-h-screen w-full'>
        <section className='text-center'>
            <h2 className='pt-[50px] text-[50px] font-bold'>Página no Encontrada</h2>
            <img src={require('../img/NotFoundEnhafa.jpg')} className='w-[380px] mx-auto'/>
            <Link to="/login" className='text-[20px] font-medium'>Regresar</Link>
        </section>
    </body>
  )
}

export default NotFound