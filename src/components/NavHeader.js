import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function NavHeader() {
  return (
    <body className='bg-[#161616] text-[#fff] fixed top-0 left-0 right-0 button-0 h-[60px] border-b'>
        <div className='justify-between flex items-center mx-4 my-2'>
            
            <div className='flex items-center gap-2'>
                <img src={require('../img/Icon.png')} className='w-[40px]'/>
                <h2 className='text-[24px] font-bold tracking-[1px]'>ENHAFA</h2>
            </div>

            <div className='flex items-center gap-[40px]'>
                <div className='items-center flex gap-2'>
                    <img src={require('../img/MitXel_logo.jpg')} className='w-[40px] rounded-full'/>
                    <p className='text-[14px] font-bold tracking-[1px] text-[#D3D3D6]'>Keytel</p>
                </div>

                <div className='flex items-center gap-2 bg-[#000] h-[40px] rounded-lg text-[#FFB421]'>
                    <NotificationsNoneIcon className='ml-[15px]'/>
                    <p className='mr-[15px] tracking-[1px] uppercase text-[14px] font-medium'>Gerencia</p>
                </div>

                <button>
                    <LogoutIcon className='text-[#D3D3D6] hover:text-[#ffb421]'/>
                </button>
            </div>
        </div>
    </body>
  )
}

export default NavHeader