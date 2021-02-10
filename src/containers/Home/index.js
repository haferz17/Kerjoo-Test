import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { doAbsenAction, getAbsenAction } from "../../redux/actions/homeAction";
import { doLogoutAction } from "../../redux/actions/authAction";
import { LOGIN } from '../../config/navigation';
import { ScreenLoader } from '../../components';
import moment from 'moment';
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const listAbsen = [
    { id: 1, name: 'Absen masuk' },
    { id: 2, name: 'Absen keluar' },
    { id: 3, name: 'Absen istirahat' },
    { id: 4, name: 'Absen selesai istirahat' },
    { id: 5, name: 'Absen mulai lembur' },
    { id: 6, name: 'Absen selesai lembur' },
]

const Home = (props) => {
    const [showAbsen, setShowAbsen] = useState(true)
    const [showData, setData] = useState(true)
    const [coords, setCoords] = useState(null)
    const [marker, setMarker] = useState(null)
    const dispatch = useDispatch()
    const { isLoading, isSuccess, isError, token } = useSelector(state => state.auth)
    const { dataAbsen, finishedType } = useSelector(state => state.home)

    useEffect(() => {
        dispatch(getAbsenAction({ log_date: moment().format("YYYY-MM-DD") || "" }))
    }, [])

    const handleClickAbsen = () => {
        const body = {
            type_id: coords.typeId,
            log_date: moment().format("YYYY-MM-DD"),
            log_time: moment().format("HH:mm:ss"),
            longitude: coords.longitude,
            latitude: coords.latitude
        }
        dispatch(doAbsenAction(body))
        dispatch(getAbsenAction({ log_date: moment().format("YYYY-MM-DD") || "" }))
    }

    const getCoords = (typeId) => {
        Geolocation.getCurrentPosition(info => setCoords({
            typeId,
            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
        }));
    }

    const handleViewMap = (data) => {
        if (data) {
            setMarker({
                latitude: parseFloat(data.latitude),
                longitude: parseFloat(data.longitude),
                latitudeDelta: Math.max(0, parseFloat(data.latitude)),
                longitudeDelta: Math.max(0, parseFloat(data.longitude))
            })
        }
    }

    const handleClickLogout = () => {
        dispatch(doLogoutAction())
    }

    useEffect(() => {
        coords && handleClickAbsen()
    }, [coords])

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
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => getCoords(item.id)}
                        style={styles.itemMenu(finishedType.includes(item.id))}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
            <TouchableOpacity onPress={() => setData(!showData)} style={styles.titleMenu}>
                <Text>Data Absensi</Text>
            </TouchableOpacity>
            {showData && dataAbsen.map(item => {
                return (
                    <TouchableOpacity key={item.id} onPress={() => null} style={styles.tableData}>
                        <Text>{item.type}</Text>
                        <Text>{item.data ? item.data.log_time : "-"}</Text>
                        <TouchableOpacity onPress={() => handleViewMap(item.data)}>
                            <Text>View Map</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            })}
            {marker &&
                <MapView
                    style={{ flex: 1, zIndex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={marker}
                >
                    <Marker
                        coordinate={marker}
                    />
                </MapView>
            }
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
        borderWidth: 1,
        marginTop: 20
    },
    itemMenu: (finish) => ({
        padding: 5,
        marginVertical: 5,
        borderWidth: 1,
        backgroundColor: finish ? 'cyan' : 'white'
    }),
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