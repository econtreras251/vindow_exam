import React, { useCallback } from 'react';
import './card.scss';
import RightArrow from '../icons/RightArrow';
import { useAppDispatch } from '../redux/store';
import { toggleModalAction } from '../redux/actions';

interface CardProps {
  image: string;
  title: string;
  description: string;
  url: string
  thumbnail?: string;
}


function Card(props: CardProps) {
  const dispatch = useAppDispatch();

  const openImage = useCallback(() => {
    dispatch(toggleModalAction(props.image));
  }, [dispatch, props.image]);

  return (
    <div className="card p-0 border-0">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img onClick={openImage} src={props.thumbnail || props.image} className="img-fluid custom-img rounded" alt={props.title} />
        </div>
        <div className="col-md-8">

          <div className="card-body text-dark h-100 justify-content-between d-flex flex-column">
            <h4 className="card-title font-weight-bold">{props.title}</h4>
            <p className="card-text">{props.description}</p>
            <a href={props.url} target="_blank" rel="noreferrer" className="text-decoration-none text-primary font-weight-bold" data-ol-has-click-handler="">
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
