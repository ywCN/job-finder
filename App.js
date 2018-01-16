import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Notifications } from 'expo';

import store from './store'; // the redux store
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
import registerForNotifications from './services/push_notifications';

export default class App extends React.Component {
    // To test push notification
    //
    // 1. open app on device via Expo, check log
    // 2. if null, restart app until seeing token like ExponentPushToken[oooooxxxxx]
    // 3. go to http://rallycoding.herokuapp.com/api/tokens
    // 4. paste token, enter messege, hit enter
    componentDidMount() {
        registerForNotifications();
        Notifications.addListener(notification => {
            const { data: { text }, origin } = notification;

            if (origin === 'received' && text) {
                Alert.alert('New Push Notification', text, [{ text: 'Ok.' }]);
            }
        });
    }

    componentWillMount() {
        // remove token to log out for testing
        // AsyncStorage.removeItem('fb_token');
    }

    render() {
        // define some routes for screens
        // keys like welcome and auth will become tab names
        // DO NOT use duplicated keys
        const MainNavigator = TabNavigator(
            {
                welcome: { screen: WelcomeScreen },
                auth: { screen: AuthScreen },
                main: {
                    screen: TabNavigator(
                        {
                            map: { screen: MapScreen },
                            deck: { screen: DeckScreen },
                            review: {
                                screen: StackNavigator({
                                    review: { screen: ReviewScreen },
                                    settings: { screen: SettingsScreen }
                                })
                            }
                        },
                        {
                            tabBarPosition: 'bottom', // for android
                            tabBarOptions: {
                                labelStyle: { fontSize: 12 } // font size in tab
                            }
                        }
                    )
                }
            },
            {
                navigationOptions: {
                    tabBarVisible: false // hide tabBar
                },
                lazy: true // only load screen that user is currently using
            }
        );
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MainNavigator />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});
