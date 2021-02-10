import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { doLoginAction } from "../../redux/actions/authAction";
import { HOME } from '../../config/navigation';
import { ScreenLoader } from '../../components';

const Login = (props) => {
    const [email, setEmail] = useState("aftarr32@gmail.com")
    const [password, setPassword] = useState("FsHlmU29UE")
    const dispatch = useDispatch()
    const { isLoading, isSuccess, isError } = useSelector(state => state.auth)

    const handleClickLogin = () => {
        dispatch(doLoginAction({ email, password }))
    }

    useEffect(() => {
        isSuccess && props.navigation.navigate(HOME)
        isError && alert("Login failed, the given data was invalid.")
    }, [isSuccess, isError])

    return (
        <SafeAreaView style={styles.container}>
            <ScreenLoader loading={isLoading} />
            <Text style={styles.text}>Login</Text>
            <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.textInput}
            />
            <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.button} onPress={handleClickLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    text: {
    },
    textInput: {
        borderWidth: 1,
        marginVertical: 5
    },
    button: {
        borderWidth: 1,
        padding: 5,
        marginVertical: 5,
        backgroundColor: 'lightgreen'
    }
});