import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { HOME, LOGIN } from '../../config/navigation';
import { useSelector } from "react-redux";

const Splash = (props) => {
    const { token } = useSelector(state => state.auth)
    useEffect(() => {
        setTimeout(() => props.navigation.navigate(token ? HOME : LOGIN), 2000);
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
    }
});