import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ creator }) => {
  return (
    <article className="creator-card">
      {creator.imageURL && (
        <div className="card-image">
          <img src={creator.imageURL} alt={creator.name} />
        </div>
      )}
      
      <div className="card-content">
        <h3>{creator.name}</h3>
        <p>{creator.description}</p>
        
        <div className="card-actions">
          <a 
            href={creator.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="visit-btn"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Channel
          </a>
          
          <Link to={`/creator/${creator.id}`} role="button" className="outline">
            View Details
          </Link>
          
          <Link to={`/edit/${creator.id}`} role="button" className="secondary">
            Edit
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;