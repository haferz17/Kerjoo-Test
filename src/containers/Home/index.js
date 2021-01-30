import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/actions/homeAction";

const Home = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.home)

    useEffect(() => { dispatch(getDataAction()) }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Home</Text>
            {data.map(item => (
                <Text style={styles.text} key={item.id}>{item.name}</Text>
            ))}
        </SafeAreaView>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
    }
});