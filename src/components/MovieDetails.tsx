import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { currencyFormatter } from '../helpers';
import { ActorItem } from './ActorItem';
interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}


const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star"
                        color="#ffcb41"
                        size={16}
                    />
                    <Text style={{ color: '#000' }}> {movieFull.vote_average}</Text>
                    {
                        <Text style={{ color: '#000', marginHorizontal: 10 }}>
                            - {movieFull.genres.map(g => g.name).join(', ')}
                        </Text>
                    }
                </View>
                <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold', marginVertical: 10 }}>Sinopsis</Text>
                <Text style={{ color: '#000', fontSize: 15 }}>
                    {movieFull.overview}
                </Text>
                <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold', marginVertical: 10 }}>Presupuesto</Text>

                <Text style={{ color: '#000', fontSize: 18 }}>
                    {currencyFormatter(movieFull.budget)}
                </Text>
            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginLeft: 20 }}>
                <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold', marginVertical: 10 }}>Actores</Text>
                <FlatList
                    data={cast}
                    renderItem={({item}) => <ActorItem actor={item}/> }
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingBottom: 20 }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({

});

export default MovieDetails