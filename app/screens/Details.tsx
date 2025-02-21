import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { DetailsPageProps } from '../navigation/RootStack'
import Animated, { FadeInRight, LightSpeedInRight } from 'react-native-reanimated';

const Details = ({ route }: DetailsPageProps) => {
    const { item } = route.params;
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Animated.Image sharedTransitionTag={`shared-${item.id}`} source={{ uri: item.image }} style={{ height: 300, width: '100%' }} />
                <Animated.Text entering={LightSpeedInRight.duration(300).delay(200)} style={{ fontSize: 20, fontWeight: 'bold', padding: 16 }}>{item.title}</Animated.Text>
                <Animated.Text entering={FadeInRight.duration(300).delay(600)} style={{ fontSize: 20, padding: 16 }}>{item.description}</Animated.Text>
            </View>

        </ScrollView>
    )
}
export default Details