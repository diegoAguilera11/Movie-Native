/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';


const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const { nowPlaying, popular, upcoming, topRated, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top }}>
        <View
          style={{
            height: 450,
          }}
        >
          {/* Carosel principal */}
          <Carousel
            style={{ width: windowWidth, justifyContent: 'center' }}
            mode='parallax'
            pagingEnabled={false}
            windowSize={2}
            width={300}
            height={450}
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 40,
              parallaxAdjacentItemScale: 0.75,
            }}
            data={nowPlaying!}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
          />
        </View>
        {/* Peliculas Populares */}
        <HorizontalSlider title='Populares' movies={popular}/>
        <HorizontalSlider title='Top Rated' movies={topRated}/>
        <HorizontalSlider title='Up Coming' movies={upcoming}/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
