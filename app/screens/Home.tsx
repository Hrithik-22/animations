import { View, Text, Button } from 'react-native'
import React from 'react'
import { HomePageProps } from '../navigation/RootStack'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

const Home = ({ navigation }: HomePageProps) => {
    const width = useSharedValue(150);
    const height = useSharedValue(150);
    const backgroundColor = useSharedValue('teal')

    const startAnimation = () => {
        const randomWidth = Math.floor(Math.random() * 300) + 100;
        const randomHeight = Math.floor(Math.random() * 300) + 100;
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        width.value = withSpring(randomWidth)
        height.value = withSpring(randomHeight)
        backgroundColor.value = withSpring(randomColor, { duration: 2000 })
    }
    return (
        <View>
            <Button title='Start Animation' onPress={startAnimation} />
            {/* <Button title='Go to Details' onPress={() => navigation.navigate('Details')} /> */}
            <Animated.View style={{ width: width, height: height, backgroundColor: backgroundColor }} ></Animated.View>

        </View>
    )
}

export default Home