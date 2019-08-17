import React, { Component } from 'react'
import{Grid, Cell} from 'react-mdl';
class Home extends Component{
    render(){
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    
                    <div className="my-text">
                        <h2 style={{alignContent:'center'}}>Mercado virtual de freelancers</h2>
                        <hr></hr>
                        <p>Ahora, puedes monetizar tus habilidades facilmente</p>
                        <p>
                         Desarrollo | Diseño | Ensayos | Otros 
                        </p>
                        
                    </div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}
export default Home;