import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}


const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <Text>{movieFull.release_date}</Text>
            <Text>ddd</Text>
        </>
    )
}

const styles = StyleSheet.create({
    
});

export default MovieDetails