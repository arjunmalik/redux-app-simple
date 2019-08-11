// Action Creator
export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

export const deSelectSong = song => {
  return {
    type: 'SONG_DESELECTED',
    payload: song
  };
};
