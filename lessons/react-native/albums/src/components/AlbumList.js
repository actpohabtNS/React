import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor() {
    super();

    this.state = {albums: []};
  }

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({albums: response.data}));
  }

  render() {
    const albums = this.state.albums.map((album) => (
      <AlbumDetail album={album} key={album.title} />
    ));

    return <View>{albums}</View>;
  }
}

export default AlbumList;
