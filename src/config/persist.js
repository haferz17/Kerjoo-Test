import AsyncStorage from '@react-native-community/async-storage';

const persistKey = {
    home: 'HOME'
}

const homeConfig = {
    key: persistKey.home,
    storage: AsyncStorage
}

export {
    homeConfig
}