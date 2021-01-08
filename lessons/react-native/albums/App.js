import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <>
      <Header text="Albums" />
      <AlbumList />
    </>
  );
};

export default App;
