/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';


const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const { nowPlaying, popular, upcoming, topRated, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setMainColors, colors } = useContext(GradientContext);

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying])


  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary, secondary] = await getImageColors(uri, index)
    // console.log({primary, secondary});
    setMainColors({ primary, secondary });
  }



  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="blue" size={50} />
      </View>
    );
  }
  return (
    <GradientBackground>
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
                parallaxScrollingScale: 0.85,
                parallaxScrollingOffset: 30,
                parallaxAdjacentItemScale: 0.70,
              }}
              onSnapToItem={(index) => getPosterColors(index)}
              data={nowPlaying!}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
            />
          </View>
          {/* Peliculas Populares */}
          <HorizontalSlider title='Populares' movies={popular} />
          <HorizontalSlider title='Top Rated' movies={topRated} />
          <HorizontalSlider title='Up Coming' movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
