import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { HOME } from '../../config/navigation';

const Splash = (props) => {
    useEffect(() => {
        setTimeout(() => props.navigation.navigate(HOME), 2000);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Splash Screen</Text>
        </SafeAreaView>
    )
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
    }
});