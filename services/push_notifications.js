import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushtoken');
    console.log(previousToken);
    if (previousToken) {
        return;
    } else {
        let { status } = await Permissions.askAsync(
            Permissions.REMOTE_NOTIFICATIONS
        );

        if (status !== 'granted') {
            return;
        }

        let token = await Notifications.getExponentPushTokenAsync();
    }
};
