import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        // Dispatch the action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        // Start up FB Login process
        doFacebookLogin(dispatch); // pass dispatch function into helper function
    }
};

const doFacebookLogin = async dispatch => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '212870682615418',
        {
            permissions: ['public_profile']
        }
    );

    // login failed
    if (type === 'cancel') {
        return dispatchEvent({ type: FACEBOOK_LOGIN_FAIL });
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

// AsyncStorage is a JavaScript Object(key:value)
// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token, token);
// AsyncStorage.getItem('fb_token);
