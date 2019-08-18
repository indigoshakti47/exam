import React, { Component } from 'react'
import{Grid, Cell} from 'react-mdl';
import photo from '../logo.png';

class Perfil extends Component{
    render(){
        return(
            <div style={{width:'-webkit-fill-available',height:'-webkit-fill-available',padding:'25px 15%'}}>
                <Grid className="grid" style={
                    {
                        padding:'0',
                        width: '50%',
                        height: '100%',
                        display:'inline-block',
                        float:'left'}
                    }>
                    <Cell className="pos" col={6} style={{height: 'auto',width:'-webkit-fill-available',paddingLeft:'25px',paddingRight:'25px'}}>
                        <div className="perfil">
                            <h1 className='text-profile' style={{alignContent:'left',fontSize: 20}}>Perfil</h1>
                            <div style={{width:'25%',padding:'0',display: 'inline-block',float:'left'}}>
                                <img className="photo-profile" src={photo} alt="photo-profile"/>
                                <p style={{color:'blue'}}>Actualizar foto</p>
                            </div>
                            <div style={{width:'75%',padding:'0',display: 'inline-block',float:'left'}}>
                                <p className='name'>Juan Felipe Rivadeneira Delgado</p>
                                <p className="editar">Editar</p>
                                <p></p>
                            </div>
                        </div>
                    </Cell>
                    <Cell className="pos" col={6} style={{height: 'auto',width:'-webkit-fill-available',paddingLeft:'25px',paddingRight:'25px'}}>
                        <div>
                            <h1 className='text-profile' style={{alignContent:'left',fontSize: 20}}>Direccion</h1>
                            <p>Crra 9C #121-48</p>
                            <p>Bogotá DC 110111</p>
                            <p>DISTRITO CAPITAL DE BOGOTÁ</p>
                            <p></p>
                            <p className="editar">Administrar direcciones</p>
                        </div>
                    </Cell>
                </Grid>
                <Grid style={
                    {
                        padding:'0',
                        width: '50%',
                        height: '100%',
                        display:'inline-block',
                        float:'left'}
                    }>
                    <Cell className="pos" col={6} style={{height: 'auto',width:'-webkit-fill-available',paddingLeft:'25px',paddingRight:'25px'}}>
                        <div>
                            <h1 className='text-profile' style={{alignContent:'left',fontSize: 20}}>Correo electronico</h1>
                            <p>jfeliperd@gmail.com</p>
                            <p style={{fontSize:'12px'}}>Principal</p>
                            <p></p>
                            <p className="editar">Editar</p>
                        </div>
                    </Cell>
                    <Cell className="pos" col={6} style={{height: 'auto',width:'-webkit-fill-available',paddingLeft:'25px',paddingRight:'25px'}}>
                        <div>
                            <h1 className='text-profile' style={{alignContent:'left',fontSize: 20}}>Mis servicios</h1>
                            <p style={{textDecoration: 'underline'}}>Historial</p>
                            <p style={{textDecoration: 'underline'}}>Activos</p>
                            <p></p>
                        </div>
                    </Cell>
                    <Cell className="pos" col={6} style={{height: 'auto',width:'-webkit-fill-available',paddingLeft:'25px',paddingRight:'25px'}}>
                        <div>
                            <h1 className='text-profile' style={{alignContent:'left',fontSize: 20}}>Opciones de cuenta</h1>
                            <p>Telefono: </p>
                            <p>3045481244</p>
                            <p>Celular, Principal</p>
                            <p></p>
                            <p className="editar">Editar</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
            
        )
    }
}
export default Perfil;