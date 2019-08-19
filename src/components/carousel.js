import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Textfield, Grid, Cell, Card, CardActions, CardTitle} from 'react-mdl';
import './carousel.css';


/*Subir imágenes relacionadas a la empresa a firebase y actualizar los links*/

const imgUrls = [
	"https://www.solidbackgrounds.com/images/2560x1440/2560x1440-yellow-solid-color-background.jpg","https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg","https://www.solidbackgrounds.com/images/1920x1080/1920x1080-red-solid-color-background.jpg","https://wallpapercave.com/wp/yANCMtk.jpg"
];


const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		height: '50vh',
		backgroundPosition: 'center'
	};
	return (
		
		<div className="image-slide" style={styles}>
			<Textfield className="search-textfield"
    			onChange={() => {}}
    			label="Expandable Input"
    			expandable
    			expandableIcon="search"
			/>
        </div>
		
        
	);
}

class Carousel extends Component {
	constructor (props) {
		super(props);
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />

				<div>
				<Grid className="demo-grid-1">
        			<Cell col={4}>
						<Card shadow={0} style={{width: '356px', height: '156px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto'}}>
    					<CardTitle expand />
						<p>Categoria 1</p> </Card>
					</Cell>
        			<Cell col={4}>
						<Card shadow={0} style={{width: '356px', height: '156px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto'}}>
    					<CardTitle expand />
						<p>Categoria 2</p> </Card>
					</Cell>
        			<Cell col={4}>
						<Card shadow={0} style={{width: '356px', height: '156px', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto'}}>
    					<CardTitle expand />
						<p>Categoria 3</p> </Card>



					</Cell>
    			</Grid>
				</div>
			</div>
			
		);
	}
}

 export default Carousel;


