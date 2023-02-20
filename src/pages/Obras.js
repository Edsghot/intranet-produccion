import React, { Component, useState } from 'react'
import NavHeader from '../components/NavHeader'
import { CiCircleRemove } from "react-icons/ci";

import BarGerencia from './gerencia/BarGerencia';


function Obras() {
  const [open, setOpen] = useState(false);
  return (
    <body className='bg-[#161616] min-h-screen'>
        <NavHeader/>

        <BarGerencia/>

        <section className=' text-[#fff] pt-[100px] px-[50px]'>

          <div className='bg-[#1E1E1E] rounded-md'>
            <div className='justify-between flex p-6'>
  
              <div >
                <button className='border border-[#FFB421] rounded-[20px] px-6 py-2 r text-[#FFB421] hover:text-[#fff] hover:bg-[#FFB421] mr-4'>Todos</button>
                <button className='border border-[#FFB421] rounded-[20px] px-6 py-2 r text-[#FFB421] hover:text-[#fff] hover:bg-[#FFB421] mr-4'>Ejecucion</button>
                <button className='border border-[#FFB421] rounded-[20px] px-6 py-2 r text-[#FFB421] hover:text-[#fff] hover:bg-[#FFB421] mr-4'>Susupendidos</button>
                <button className='border border-[#FFB421] rounded-[20px] px-6 py-2 r text-[#FFB421] hover:text-[#fff] hover:bg-[#FFB421]  mr-4'>Finalizado</button>
                
              </div>
              <div>
                <div type="button" onClick={()=> setOpen(true)} className='border border-[#FFB421] rounded-md px-6 py-2 text-[#FFB421] hover:text-[#fff] hover:bg-[#FFB421] cursor-pointer'>
                  Añadir Button
                </div>
                
              </div>
  
            </div>
            <div className='grid grid-cols-12 mt-4 pb-4'>
  
              <div className='col-span-4 border-t mx-6 py-4  items-center'>
                <h2 className='text-center my-4'>Titulo de la obra</h2>
                <div className='my-2 mx-4'>Direccion de la obra</div>
                <div className='my-2 mx-4'>Administrador: </div>
                <div className='my-2 mx-4'>Tecnico</div>
                <div className='my-2 items-center text-center'>S/ 1478 587.414</div>
                <div className='my-2 text-center bg-green-200 py-2 rounded-lg text-green-800 font-semibold' >Estado: Ejeucion</div>
                <div className='text-center'>
                  <button type='button'>ver</button>
                </div>
              </div>
              <div className='col-span-4 border-t mx-6 py-4  items-center'>
                <h2 className='text-center my-4'>Titulo de la obra</h2>
                <div className='my-2 mx-4'>Direccion de la obra</div>
                <div className='my-2 mx-4'>Administrador: </div>
                <div className='my-2 mx-4'>Tecnico</div>
                <div className='my-2 items-center text-center'>S/ 1478 587.414</div>
                <div className='my-2 text-center bg-yellow-200 py-2 rounded-lg text-yellow-800 font-semibold' >Estado: Suspendido</div>
                <div className='text-center'>
                  <button type='button'>ver</button>
                </div>
              </div>
              <div className='col-span-4 border-t mx-6 py-4  items-center'>
                <h2 className='text-center my-4'>Titulo de la obra</h2>
                <div className='my-2 mx-4'>Direccion de la obra</div>
                <div className='my-2 mx-4'>Administrador: </div>
                <div className='my-2 mx-4'>Tecnico</div>
                <div className='my-2 items-center text-center'>S/ 1478 587.414</div>
                <div className='my-2 text-center bg-red-200 py-2 rounded-lg text-red-800 font-semibold' >Estado: Finalizado</div>
                <div className='text-center'>
                  <button type='button'>ver</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${open ? "w-[750px]":"hidden"} bg-[#161616] absolute right-0 top-[100px]  text-center py-[30px] drop-shadow-2xl transition-all duration-300`}>
  
            <div className='flex justify-between mx-[100px] items-center'>
              <h2 className={`text-[30px] font-bold tracking-[1px] pb-4`}>DETALLES OBRA</h2>
              <button onClick={()=>setOpen(false)} className='hover:text-[#FFB421]'>
                <CiCircleRemove className='text-[40px]'/>
              </button>
            </div>
            
            <form className='text-left mx-[100px] text-[#fff]'>
              <div className='pb-2'>
                <label className='text-[#FFB421] tracking-[1px] text-[14px] font-semibold '>Nombre de la Obra</label>
                <textarea className='w-[550px] bg-[#1E1E1E] rounded-sm'/>
              </div>
              <div className='pb-2'>
                <label className='text-[#FFB421] tracking-[1px] text-[14px] font-semibold '>Ubicacion de la Obra</label>
                <input className='w-[550px] bg-[#1E1E1E] rounded-sm px-2 py-1'/>
              </div>
              
              <div className='pb-2'>
                <label className='text-[#FFB421] tracking-[1px] text-[14px] font-semibold '>Fechas de Inicio</label>
                <input type="datetime-local" className='w-[550px] bg-[#1E1E1E] rounded-sm px-2 py-1'/>
              </div>

              <div className='pb-2'>
                <label className='text-[#FFB421] tracking-[1px] text-[14px] font-semibold '>Encargado Admin</label>
                <input className='w-[550px] bg-[#1E1E1E] rounded-sm'/>
              </div>
              <div className='pb-2'>
                <label className='text-[#FFB421] tracking-[1px] text-[14px] font-semibold '>Encargado Tecnico</label>
                <input className='w-[550px] bg-[#1E1E1E] rounded-sm'/>
              </div>
              
              <div className='pb-2'>
                <label className='text-[#FFB421] tracking-[1px] text-[14px] font-semibold '>Presupuesto de la Obra</label>
                <input type="" className='w-[550px] bg-[#1E1E1E] rounded-sm px-2 py-1' placeholder='S/. '/>
              </div>
  
              <div className='pb-2'>
                <label className='text-[#FFB421] tracking-[1px] text-[14px] font-semibold '>Presupuesto de la Obra</label> <br/>
                <select className='w-[550px] bg-[#1E1E1E] rounded-sm px-2 py-1'>
                <option>Proceso</option>
                <option>Ganado</option>
                <option>Rechazado</option>
              </select>
              </div>
              <button className='mt-[30px] w-[550px] h-[50px] bg-[#FFB421] rounded-md py-1'>ACTUALIZAR</button>
            </form>
  
          </div>
        </section>
      </body>
  )
}

export default Obras