import React from 'react';
import {Text, View, Image, StyleSheet, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image source={{uri: thumbnail_image}} style={styles.thumbnail} />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.headerContentText}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{uri: image}} style={styles.image} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnail: {
    height: 50,
    width: 50,
    borderRadius: 2,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 18,
  },
  headerContentText: {
    color: '#aaa',
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default AlbumDetail;
