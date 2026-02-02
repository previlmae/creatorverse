import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './ViewCreator.css';

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreator();
  }, [id]);

  const fetchCreator = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
        navigate('/');
      } else {
        setCreator(data);
      }
    } catch (error) {
      console.error('Error:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${creator.name}?`)) {
      try {
        const { error } = await supabase
          .from('creators')
          .delete()
          .eq('id', id);

        if (error) {
          console.error('Error deleting creator:', error);
          alert('Failed to delete creator. Please try again.');
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  if (loading) {
    return (
      <div className="container">
        <p aria-busy="true">Loading creator...</p>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="container">
        <article>
          <h2>Creator not found</h2>
          <Link to="/" role="button">
            Back to Home
          </Link>
        </article>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="back-link">
        <Link to="/">← Back to All Creators</Link>
      </div>

      <article className="creator-detail">
        {creator.imageURL && (
          <div className="detail-image">
            <img src={creator.imageURL} alt={creator.name} />
          </div>
        )}

        <div className="detail-content">
          <h1>{creator.name}</h1>
          <p className="description">{creator.description}</p>

          <div className="detail-actions">
            <a
              href={creator.url}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              Visit Channel
            </a>
            <Link to={`/edit/${creator.id}`} role="button" className="secondary">
              Edit Creator
            </Link>
            <button onClick={handleDelete} className="contrast delete-btn">
              Delete Creator
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ViewCreator;