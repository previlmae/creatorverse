import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';
import './ShowCreators.css';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCreators = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Header Section with Video Background */}
      <section className="hero-header">
        {/* Background Video */}
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="videos/hero-video2.mp4" type="video/mp4" />
          {/* Fallback if video doesn't load */}
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        <div className="hero-overlay">
          <div className="container hero-content">
            <h1 className="hero-title">✨ Creatorverse</h1>
            <p className="hero-subtitle">Where Innovation Meets Community</p>
            <p className="hero-description">
              Discover amazing content creators worth following across YouTube, Twitch, Instagram, and beyond!
            </p>
            <Link to="/new" role="button" className="hero-button">
              + Add Creator
            </Link>
          </div>
        </div>
      </section>

      {/* Creators Grid Section */}
      <div className="container main-content">
        {loading ? (
          <div className="loading">
            <p aria-busy="true">Loading creators...</p>
          </div>
        ) : creators.length === 0 ? (
          <article className="empty-state">
            <h2>No Creators Yet! 😢</h2>
            <p>Be the first to add a content creator to the Creatorverse.</p>
            <Link to="/new" role="button">
              Add Your First Creator
            </Link>
          </article>
        ) : (
          <>
            <div className="section-header">
              <h2>Featured Creators</h2>
              <p>{creators.length} amazing creator{creators.length !== 1 ? 's' : ''} in the community</p>
            </div>
            <div className="creators-grid">
              {creators.map((creator) => (
                <Card key={creator.id} creator={creator} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShowCreators;