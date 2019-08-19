import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './carousel.css';
import {Textfield, Grid, Cell, Card, CardActions, CardTitle} from 'react-mdl'
import Category from '../Category';



const imgUrls = [
	"https://firebasestorage.googleapis.com/v0/b/kundalini-agent.appspot.com/o/Screen%20Shot%202019-08-19%20at%2011.22.40%20AM.png?alt=media&token=b426f034-46e5-4889-b51a-0578fa432098","https://firebasestorage.googleapis.com/v0/b/kundalini-agent.appspot.com/o/BACK8.png?alt=media&token=49b317c6-fa54-4c23-9149-0a958959cb81","https://firebasestorage.googleapis.com/v0/b/kundalini-agent.appspot.com/o/BACK6.png?alt=media&token=84e31db9-2b76-4ec8-a44e-29312e53c750","https://firebasestorage.googleapis.com/v0/b/kundalini-agent.appspot.com/o/back7.png?alt=media&token=483bd398-43c7-4836-8914-1aae28be0042","https://firebasestorage.googleapis.com/v0/b/kundalini-agent.appspot.com/o/BACK9.png?alt=media&token=587f29b8-f1f2-446f-a594-3da17fca8cbe"
];

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

				{/* Categories--> Routing to take each of them to a new component */}

				<div class="card bg-dark text-white text-center mb-3">
  					<div class="card-body">
  					  <h3 class="card-title">Graphics and design</h3>
  					  <p class="card-text">A single place, millions of creative talents. From logos, packaging and presentations, we've got them all</p>
  					</div>
				</div>

				<div class="card bg-info text-white text-center mb-3">
				  <div class="card-body">
				    <h3 class="card-title">Digital marketing</h3>
				    <p class="card-text">Don't stay behing. Update and upgrade your business online.'</p>
				  </div>
				</div>
				<div class="card bg-secondary text-white text-center mb-3">
				  <div class="card-body">
				    <h3 class="card-title">Programming & Tech</h3>
				    <p class="card-text">Get all the technical bells and whistles without paying for a programming degree</p>
				  </div>
				</div>

				<div class="card-columns">

					{/* Advantages and general information */}

 <				div class="card bg-light p-3 text-center">
  				  <blockquote class="card-body">
  				    <p> Payment is released to the freelancer once you’re pleased and approve the work you get.</p>
  				    <footer>
  				      <small>
						Payment Protection, Guaranteed
  				      </small>
  				    </footer>
  				  </blockquote>
  				</div>

  				<div class="card bg-warning text-white p-3 text-center">
  				  <blockquote class="card-body">
  				    <p>Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price.</p>
  				    <footer>
  				      <small>
							Know The Price Upfront
  				      </small>
  				    </footer>
  				  </blockquote>
  				</div>


  				<div class="card bg-light p-3 text-center">
  				  <blockquote class="card-body">
  				    <p> Κοῖος is here for you, anything from answering any questions to resolving any issues, at any time.</p>
  				    <footer>
  				      <small>
						We’re Here For You 24/7
  				      </small>
  				    </footer>
  				  </blockquote>
  				</div>
				</div>

			</div>
		);
	}
}

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
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	return (
		<div className="image-slide" style={styles}>
			<Textfield style={{color: '#f5e900'}}className="search-textfield"
                onChange={() => {}}
                label="Expandable Input"
                expandable
                expandableIcon="search"
            />
        </div>
        
	);
}


 export default Carousel;


