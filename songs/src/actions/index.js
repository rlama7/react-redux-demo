/**
 * Action Creator
 * @param {*} song payload for action selectSong
 */
export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
