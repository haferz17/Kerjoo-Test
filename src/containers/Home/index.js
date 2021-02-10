import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../../redux/actions/homeAction";
import { doLogoutAction } from "../../redux/actions/authAction";
import { LOGIN } from '../../config/navigation';
import { ScreenLoader } from '../../components';

const listAbsen = [
    { id: 1, name: 'Absen masuk' },
    { id: 2, name: 'Absen keluar' },
    { id: 3, name: 'Absen istirahat' },
    { id: 4, name: 'Absen selesai istirahat' },
    { id: 5, name: 'Absen mulai lembur' },
    { id: 6, name: 'Absen selesai lembur' },
]

const listData = [
    { id: 1, name: 'Masuk', time: '08:00' },
    { id: 2, name: 'Keluar', time: '08:00' },
    { id: 3, name: 'Istirahat', time: '08:00' },
    { id: 4, name: 'Selesai istirahat', time: '08:00' },
    { id: 5, name: 'Mulai lembur', time: '08:00' },
    { id: 6, name: 'Selesai lembur', time: '08:00' },
]

const Home = (props) => {
    const [showAbsen, setShowAbsen] = useState(true)
    const [showData, setData] = useState(true)
    const dispatch = useDispatch()
    const { isLoading, isSuccess, isError, token } = useSelector(state => state.auth)

    // useEffect(() => { dispatch(getDataAction()) }, [])

    const handleClickLogout = () => {
        dispatch(doLogoutAction())
    }

    useEffect(() => {
        isSuccess && !token && props.navigation.navigate(LOGIN)
        isError && alert("Logout failed")
    }, [isSuccess, isError])

    return (
        <SafeAreaView style={styles.container}>
            <ScreenLoader loading={isLoading} />
            <Text style={styles.text}>Home</Text>
            <TouchableOpacity onPress={() => setShowAbsen(!showAbsen)} style={styles.titleMenu}>
                <Text>Absen</Text>
            </TouchableOpacity>
            {showAbsen && listAbsen.map(item => {
                return (
                    <TouchableOpacity onPress={() => null} style={styles.itemMenu}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
            <TouchableOpacity onPress={() => setData(!showData)} style={styles.titleMenu}>
                <Text>Data Absensi</Text>
            </TouchableOpacity>
            {showData && listData.map(item => {
                return (
                    <TouchableOpacity onPress={() => null} style={styles.tableData}>
                        <Text>{item.name}</Text>
                        <Text>{item.time}</Text>
                        <TouchableOpacity>
                            <Text>View Map</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            })}
            <TouchableOpacity style={styles.buttonLogout} onPress={handleClickLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    text: {
    },
    titleMenu: {
        padding: 5,
        marginVertical: 5,
        backgroundColor: 'lightgreen',
        borderWidth: 1
    },
    itemMenu: {
        padding: 5,
        marginVertical: 5,
        borderWidth: 1
    },
    tableData: {
        padding: 5,
        marginVertical: 5,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonLogout: {
        padding: 5,
        backgroundColor: 'tomato'
    }
});