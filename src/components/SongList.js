import React from 'react';
import { connect } from 'react-redux';
import {selectSong, deSelectSong} from '../actions';

class SongList extends React.Component {
  renderList() {

    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
        <div> {song.title}</div>
          <div>
            <button
              onClick = {() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return {songs: state.songs};
}

export default connect(mapStateToProps, {
  selectSong,
  deSelectSong
})(SongList);
