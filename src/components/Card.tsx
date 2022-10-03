import React from 'react';

function Card(props: { imgUrl: string, title: string, description: string }) {
  return (
    <div className="card border border-dark p-2">
        <img src={props.imgUrl} className="card-img-top rounded h-50" alt="..." />
        <div className="card-body text-dark">
            <h4 className="card-title font-weight-bold">{props.title}</h4>
            <p className="card-text">{props.description}</p>
            <a href="#" className="text-decoration-none text-primary font-weight-bold" data-ol-has-click-handler="">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
        </div>
    </div>
  );
}

export default Card;
