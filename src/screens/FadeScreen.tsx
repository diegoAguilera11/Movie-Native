import React, { useEffect, useRef } from 'react'
import { View, Animated, Text, TouchableOpacity } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const {opacity, fadeIn, fadeOut} = useFade();

    // useEffect(() => {
    //   fadeIn();
    // }, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#cecece', justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{
                backgroundColor: '#084f64',
                borderColor: 'white',
                borderWidth: 2,
                width: 150,
                height: 150,
                opacity
            }}>
            </Animated.View>
            <TouchableOpacity
                style={{ backgroundColor: '#f35572', borderRadius: 5, paddingVertical: 25, paddingHorizontal: 45, marginVertical: 20 }}
                onPress={fadeIn}
            >
                <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold' }}>Fade In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ backgroundColor: '#ffcb6b', borderRadius: 5, paddingVertical: 25, paddingHorizontal: 45, marginVertical: 20 }}
                onPress={fadeOut}
            >
                <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold' }}>Fade Out</Text>
            </TouchableOpacity>
        </View>
    )
}