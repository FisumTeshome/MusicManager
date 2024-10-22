
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongsStart } from '../redux/slices/songSlice';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css';

const SongList = () => {
  const dispatch = useDispatch();
  
  const { songs, loading, error } = useSelector((state: RootState) => state.songs);
  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    console.log("Deleting song with id:", id); 
    try {
      await axios.delete(`http://localhost:5000/api/delete/${id}`);
      window.location.reload(); // Refreshs the  page after deletion
    } catch (err) {
      console.error('Error deleting song', err);
    }
  };

  if (loading) return <p>Loading songs...</p>;
  if (error) return <p>Error loading songs!</p>;
  console.log("Songs:", songs); 

  return (
    <div>
      <h2>Song List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Title of the music</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
          {songs.map((song: { _id: string, title: string, artist: string, album: string, genre: string }) => (
            <tr key={song._id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>
                
                <Link className ="link" to={`/update/${song._id}`}>Update</Link>
                <button className='btn btn-danger ms-2' onClick={() => handleDelete(song._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><Link to="/create" className ="adder">Click here</Link> if you want to add any music</p>
    </div>
  );
};

export default SongList;
