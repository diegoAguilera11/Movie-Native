import { View, Text, Animated } from 'react-native'
import React, { useRef } from 'react'

export const useFade = () => {

    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = (callback?: Function) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start(() => callback ? callback() : null);
    }

    const fadeOut = (duration: number = 500) => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start(() => console.log('termino la animación'));
    }

    return {
        opacity,
        fadeIn,
        fadeOut
    }
}