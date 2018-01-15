import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store'; // the redux store
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

export default class App extends React.Component {
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
