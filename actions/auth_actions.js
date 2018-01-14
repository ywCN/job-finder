import { AsyncStorage } from 'react-native';

import { FACEBOOK_LOGIN_SUCCESS } from './types';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        // Dispatch the action saying FB login is done
    } else {
        // Start up FB Login process
    }
};

// AsyncStorage is a JavaScript Object(key:value)
// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token, token);
// AsyncStorage.getItem('fb_token);
