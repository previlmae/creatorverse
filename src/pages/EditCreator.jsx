import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';
import './FormPage.css';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

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
        setFormData({
          name: data.name || '',
          url: data.url || '',
          description: data.description || '',
          imageURL: data.imageURL || ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.url || !formData.description) {
      alert('Please fill in all required fields!');
      return;
    }

    try {
      setSubmitting(true);
      const { error } = await supabase
        .from('creators')
        .update({
          name: formData.name,
          url: formData.url,
          description: formData.description,
          imageURL: formData.imageURL || null
        })
        .eq('id', id);

      if (error) {
        console.error('Error updating creator:', error);
        alert('Failed to update creator. Please try again.');
      } else {
        navigate(`/creator/${id}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete ${formData.name}?`)) {
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

  return (
    <div className="container">
      <div className="back-link">
        <Link to={`/creator/${id}`}>← Back to Creator Details</Link>
      </div>

      <article className="form-container">
        <h1>Edit Creator</h1>
        <p>Update the information for this content creator.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name *
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., The Tech Baddie"
              required
            />
          </label>

          <label htmlFor="url">
            Channel/Page URL *
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://www.youtube.com/@thetechbaddie"
              required
            />
            <small>The link to their channel, page, or profile</small>
          </label>

          <label htmlFor="description">
            Description *
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us what makes this creator special..."
              rows="4"
              required
            />
            <small>A short description of their content</small>
          </label>

          <label htmlFor="imageURL">
            Image URL (optional)
            <input
              type="url"
              id="imageURL"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
            <small>A link to their profile picture or content image</small>
          </label>

          <div className="form-actions">
            <button type="submit" disabled={submitting} aria-busy={submitting}>
              {submitting ? 'Saving...' : 'Save Changes'}
            </button>
            <Link to={`/creator/${id}`} role="button" className="secondary">
              Cancel
            </Link>
            <button 
              type="button" 
              onClick={handleDelete} 
              className="contrast delete-btn"
            >
              Delete Creator
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default EditCreator;