import React, {Component, useState} from 'react'
//Axios paquete para hacer peticiones a la Api
import axios from 'axios';

//cookies
import Cookies from 'universal-cookie';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

//url de la api
const apiUrl="https://enhafa.com/apienhafa/licitacion/getAll";
const cookies = new Cookies();

class Login extends Component {
    
    state = {
        form:{
            correo:'',
            contraseña:''
        }
    }
 
    //guardando valores de los inputs
    handleChange =async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    //metodo de peticion e inicion de sesion
    iniciarSesion=async()=>{
        await axios.get(apiUrl, {params: {correo: this.state.form.correo, contraseña: this.state.form.contraseña}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                
                var respuesta = response[0];
                //cookies inicio de sesion
                cookies.set('idLicitacion', respuesta.idLicitacion,{path:"/"})
                cookies.set('nombre', respuesta.idLicitacion,{path:"/"})
                cookies.set('apellido', respuesta.idLicitacion,{path:"/"})
                cookies.set('dni', respuesta.idLicitacion,{path:"/"})
                cookies.set('correo', respuesta.idLicitacion,{path:"/"})
                //redireccionando
                window.location.href="./licitaciones";

            }else{
                alert("El usuario/contraseña invalidos");
            }
        })
        .catch(error=>{
            alert("Error al Conectar con la Api")
        })
    }

    //ciclo de la pagina si no encuentra valor en las cookies no le deja logearse
    componentDidMount(){
        if(cookies.get('nombre')){
            window.location.href="./licitaciones";
        }
    }

    render(){
        return (
            <body className="bg-[#161616] min-h-screen w-full md:p-[20px] pt-[40px] flex text-[#fff] text-center font-['inter']">
                <section className='bg-[#212121] mx-auto md:w-[450px] w-[350px] rounded-md'>
                    <img src={require('../img/Logo1.png')} className='md:w-[300px] w-[200px] mx-auto pt-[50px]'/>
        
                    <h2 className='md:text-[28px] text-[24px] font-bold tracking-[2px]'>Intranet</h2>
        
                    <form  className='text-left md:px-[80px] px-[60px] md:pt-[30px] pt-[15px]'>
                        
                        <div className='pb-[15px]'>
                            <label className='tracking-[1px] md:text-[16px] text-[14px] font-semibold'>Correo</label>
                            
                            <div className='flex text-[#747474] border-[#747474] hover:text-[#FFB421] border-b hover:border-[#ffb421] py-2 text-[14px]'>
                                <EmailIcon/>
                                <input name='correo' className=' hover:text-[#ffb421] bg-[#212121] ml-2 focus:outline-none font-medium tracking-[0.7px]' placeholder='nombre@correo.com' type='text'onChange={this.handleChange} ></input>
                            </div>
                        </div>
                        
                        <div className='pt-[15px] pb-[30px]'>
                            <label className='tracking-[1px] text-[14px] md:text-[16px] font-semibold'>Contraseña</label>
                            <div className='flex text-[#747474] border-[#747474] hover:text-[#FFB421] border-b hover:border-[#ffb421] py-2 text-[14px]'>
                                <LockIcon/>
                                <input name='contraseña' className='hover:text-[#ffb421] bg-[#212121] ml-2 focus:outline-none font-medium tracking-[0.7px]' placeholder='*********' type='password' onChange={this.handleChange}></input>
                            </div>
                            
                        </div>
                        
                        <button  className='bg-[#ffb421] md:w-[290px] w-[230px] h-[45px] rounded-[5px] font-bold md:text-[20px] text-[17px] tracking-[4px] hover:bg-[#FF9F00]' onClick={()=> this.iniciarSesion()}>ENTRAR</button>
                        
                        <p className='text-[11px] text-center pt-[30px] text-[#747474]'>© 2023 - Enhafa | Todos los derechos reservados</p>
                    </form>
                </section>
            </body>
          )
    }
  
}

export default Login