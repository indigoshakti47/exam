import React, { Component } from 'react';
import{Grid, Cell} from 'react-mdl';
import Slider from "react-slick";


class Home extends Component {
    render(){

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };
          
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                

                <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>


            </div>
        )
    }
}
export default Home;




