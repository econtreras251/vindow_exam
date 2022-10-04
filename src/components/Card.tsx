import React from 'react';
import './card.scss';
import RightArrow from '../icons/RightArrow';

function Card(props: { imgUrl: string, title: string, description: string, url: string }) {
  return (
    <div className="card p-0 border-0">
      <div className="row no-gutters">
        <div className="col-md-4">
          {/* TODO: set a fixed height */}
          <img src={props.imgUrl} className="img-fluid custom-img rounded" alt="..." />
        </div>
        <div className="col-md-8">

          <div className="card-body text-dark h-100 justify-content-between d-flex flex-column">
            <h4 className="card-title font-weight-bold">{props.title}</h4>
            <p className="card-text">{props.description}</p>
            <a href={props.url} target="_blank" className="text-decoration-none text-primary font-weight-bold" data-ol-has-click-handler="">
              Read More
              <RightArrow />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
