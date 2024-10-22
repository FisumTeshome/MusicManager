import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css';

const CreateSong = () => {
  const navigate = useNavigate();
  const [song, setSong] = useState({ title: '', artist: '', album: '', genre: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/create', song);
      alert('Song created successfully');
      navigate('/');
    } catch (error) {
      console.error('Error creating song', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={song.title} onChange={handleChange} required />
      <input name="artist" placeholder="Artist" value={song.artist} onChange={handleChange} required />
      <input name="album" placeholder="Album" value={song.album} onChange={handleChange} required />
      <input name="genre" placeholder="Genre" value={song.genre} onChange={handleChange} required />
      <button type="submit">Create Song</button>
    </form>
  );
};

export default CreateSong;
