import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface'


interface Props {
    actor: Cast
}

export const ActorItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View
            style={styles.container}
        >

            {
                actor.profile_path && (
                    <Image
                        style={{ width: 100, height: 120, borderRadius: 10 }}
                        source={{ uri }}
                    />
                )
            }
            <View style={styles.actorInfo}>
                <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>{actor.name}</Text>
                <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', opacity: 0.5 }}>{actor.character}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        marginRight: 20, 
        paddingRight: 20,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 5
    }
});
