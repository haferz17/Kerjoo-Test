import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingScreen = ({ loading }) => {
    return (
        loading &&
        <View>
            <ActivityIndicator size="large" color="lightgreen" />
        </View>
    )
}

export default LoadingScreen