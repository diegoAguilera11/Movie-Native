import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useContext, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'
import { useFade } from '../hooks/useFade'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

    const { colors, prevColors,setPrevMainColors } = useContext(GradientContext);
    const { primary, secondary } = colors;
    const { primary: prevPrimary, secondary: prevSecondary } = prevColors;

    const { fadeIn,fadeOut, opacity } = useFade();
    useEffect(() => {
        fadeIn( () => {
            setPrevMainColors(colors);
            fadeOut(0);
        });
    }, [colors])



    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[prevPrimary, prevSecondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.4, y: 0.1 }}
                end={{ x: 0.7, y: 0.7 }}
            />
            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}
            >
                <LinearGradient
                    colors={[primary, secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.4, y: 0.1 }}
                    end={{ x: 0.7, y: 0.7 }}
                />
            </Animated.View>
            {children}
        </View>
    )
}