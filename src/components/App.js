import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import { selectSong } from '../actions';

const App = () => {
  return (
    <div>
      <SongList/>
      <SongDetail/>
    </div>
  );
};

export default App;
