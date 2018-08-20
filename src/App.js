import React, { Component } from 'react';
import { connect } from 'react-redux';
import Blog from './components/Blog'

class App extends Component {
  addTrack() {
      console.log('addTrack', this.trackInput.value);
      this.props.onAddTrack(this.trackInput.value);
      this.trackInput.value = '';
  }

  render() {
    console.log('nvnvnv', this.props.tracks);
    return (
      <div>
        <Blog/>
        <ul>
          {this.props.tracks.map((track, index) =>
            <li key={index}>{track}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({})
)(App);