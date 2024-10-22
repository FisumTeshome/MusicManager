import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css';

const UpdateSong = () => {
  const { id } = useParams<{ id: string }>();  // Get the song ID from the URL
  const navigate = useNavigate();  // For redirecting after the update
  const [song, setSong] = useState({ title: '', artist: '', album: '', genre: '' });

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/songs/${id}`);
        setSong(response.data);
      } catch (error) {
        console.error('Error fetching song data', error);
      }
    };

    fetchSong();
  }, [id]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/update/${id}`, song);
      alert('Song updated successfully');
      navigate('/');  // Redirect to the song list page after updating
    } catch (error) {
      console.error('Error updating song', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="New Title" value={song.title} onChange={handleChange} required />
      <input name="artist" placeholder="Artist" value={song.artist} onChange={handleChange} required />
      <input name="album" placeholder="Album" value={song.album} onChange={handleChange} required />
      <input name="genre" placeholder="Genre" value={song.genre} onChange={handleChange} required />
      <button type="submit">Update Song</button>
    </form>
  );
};

export default UpdateSong;
