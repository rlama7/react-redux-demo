import { combineReducers } from 'redux';

/**
 * Songs Reducer
 */
const songsReducer = () => {
  return [
    { title: 'Who let the dog out?', duration: '1:30' },
    { title: 'Man in the mirror', duration: '4:30' },
    { title: 'You Belong with Me', duration: '5:30' },
    { title: 'Macarena', duration: ':30' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
