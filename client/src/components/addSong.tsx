import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';
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
    <div className='formContainer'>
           <Box
        sx={{
          backgroundColor: 'rgba(28, 12, 119, 0.24)',  
          padding: 4,                
          width: '100%',
          maxWidth: '100%', 
          borderRadius:'8px',
          boxSizing: 'border-box',  
        }}
      >
         <Typography variant="h3" gutterBottom
         sx={{color:'rgba(0, 0, 0, 1)', textAlign: 'center'}}
         >
        Add any music you want
      </Typography>
      </Box>
      <Box id="buttonList">
        <Button id="navButton" component={Link} to="/"
        >
          Home
        </Button>
        <Button id="navButton" component={Link} to="/create" 
        >
          Add Music
        </Button>
        <Button id="navButton" component={Link} to="/musicInfo"
        >
          Music Cencus
        </Button>
        <Button id="navButton" component={Link} to="/music-store"
        >
          Music Store
        </Button>
      </Box>
      <div>
    <form onSubmit={handleSubmit}>
      <div className='formPage'><span>Music Title</span><input name="title" placeholder="Title" value={song.title} onChange={handleChange} required /></div>
      <div className='formPage'><span>Artist Name</span><input name="artist" placeholder="Artist" value={song.artist} onChange={handleChange} required /></div>
      <div className='formPage'><span>Album Name</span><input name="album" placeholder="Album" value={song.album} onChange={handleChange} required /></div>
      <div className='formPage'><span>Genre Type</span><input name="genre" placeholder="Genre" value={song.genre} onChange={handleChange} required /></div>
      <button type="submit">Create Song</button>
    </form></div></div>
  );
};

export default CreateSong;
