import React from 'react';
import './card.css'

function Card(props: { imgUrl: string }) {
  return (
    <div className="card bg-light">
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body text-dark">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  );
}

export default Card;
