import React from 'react';
import Products_list from './Products_list/Products_list';
import './Category.css'

const Category = (props) =>{
    return(
        <div className="category_container">
            <h2 className="category_tittle">{props.name}</h2>
            <h4>{props.description}</h4>
            <Products_list productsList={props.productsList} />
        </div>
    )
}

export default Category;