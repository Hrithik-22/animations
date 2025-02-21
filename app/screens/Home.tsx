import { View, Text, Button, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HomePageProps } from '../navigation/RootStack'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
const AnimatedInput = Animated.createAnimatedComponent(TextInput)

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

const Home = ({ navigation }: HomePageProps) => {
    const [data, setData] = useState<Product[]>([]);
    const width = useSharedValue(150);
    const height = useSharedValue(150);
    const backgroundColor = useSharedValue('teal')
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setData(data);     // Store the data in state
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    const startAnimation = () => {
        const randomWidth = Math.floor(Math.random() * 300) + 100;
        const randomHeight = Math.floor(Math.random() * 300) + 100;
        width.value = withRepeat(
            withSpring(randomWidth),
            -1, // infinite repeat
            true // reverse direction on each repeat
        );

        height.value = withRepeat(
            withSpring(randomHeight),
            -1,
            true
        );

        setInterval(() => {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            backgroundColor.value = withTiming(randomColor, { duration: 1000 });
        }, 1000);
    }
    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: width.value,
            height: height.value,
            backgroundColor: backgroundColor.value,
        }
    });
    const animatedInputStyles = useAnimatedStyle(() => {
        return {
            backgroundColor: backgroundColor.value,

        }
    })
    return (
        <ScrollView>
            {/* <Button title='Start Animation' onPress={startAnimation} /> */}
            {/* <Button title='Go to Details' onPress={() => navigation.navigate('Details')} /> */}
            {/* <Animated.View style={[animatedStyle, { marginTop: 20 }]} ></Animated.View> */}
            {/* <AnimatedInput style={[animatedInputStyles, { height: 50, marginTop: 20 }]} /> */}
            <View style={{ paddingBottom: 20 }}>
                {data.map((item) => (

                    <View key={item.id} style={{ padding: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
                            <Animated.Image sharedTransitionTag={`shared-${item.id}`} source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView >
    )
}

export default Home