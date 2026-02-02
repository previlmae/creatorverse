import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';
import './FormPage.css';

const AddCreator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });
  const [submitting, setSubmitting] = useState(false);

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
      const { data, error } = await supabase
        .from('creators')
        .insert([
          {
            name: formData.name,
            url: formData.url,
            description: formData.description,
            imageURL: formData.imageURL || null
          }
        ])
        .select();

      if (error) {
        console.error('Error adding creator:', error);
        alert('Failed to add creator. Please try again.');
      } else {
        console.log('Creator added:', data);
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="back-link">
        <Link to="/">← Back to All Creators</Link>
      </div>

      <article className="form-container">
        <h1>Add New Creator</h1>
        <p>Share a content creator you think is worth following!</p>

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
              {submitting ? 'Adding...' : 'Add Creator'}
            </button>
            <Link to="/" role="button" className="secondary">
              Cancel
            </Link>
          </div>
        </form>
      </article>
    </div>
  );
};

export default AddCreator;