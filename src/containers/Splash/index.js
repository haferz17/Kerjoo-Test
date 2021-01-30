import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { LOGIN } from '../../config/navigation';

const Splash = (props) => {
    useEffect(() => {
        setTimeout(() => props.navigation.navigate(LOGIN), 2000);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Kerjoo</Text>
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