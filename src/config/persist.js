import AsyncStorage from '@react-native-community/async-storage';

const persistKey = {
    auth: 'AUTH',
    home: 'HOME'
}

const authConfig = {
    key: persistKey.auth,
    storage: AsyncStorage
}
const homeConfig = {
    key: persistKey.home,
    storage: AsyncStorage
}

export {
    authConfig,
    homeConfig
}