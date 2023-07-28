/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity , Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';


interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}


export const MoviePoster = ({ movie, height = 450, width = 300 }: Props) => {
    const { poster_path } = movie;

    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
         onPress={ () => navigation.navigate('DetailScreen', movie)}
         activeOpacity={0.9}
         style={{
            width,
            height,
            marginHorizontal: 2,
            paddingBottom: 20,
            paddingHorizontal: 5,
         }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.60,
        shadowRadius: 8.30,
        elevation: 4,
    },
});
