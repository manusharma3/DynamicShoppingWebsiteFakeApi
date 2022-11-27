import React from 'react'
import "./Card.css"
import {  Link } from "react-router-dom";

const Card = ({ product }) => {   
    return (
        <div> <div className="card">
                <div className="card-n">
                    <h1>{product.id}</h1>
                    <img className="card-image" src={product.image} alt="card-image" />
                    <h4>{product.title}</h4>
                    <Link to={`/viewpost/${product.id}`}><div className="b-container"><button className='btn'>View post</button></div></Link>
                </div>
              </div>
        </div>
    )
}

export default Card 