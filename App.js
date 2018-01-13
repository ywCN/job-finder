import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';

export default class App extends React.Component {
    render() {
        // define some routes for screens
        // keys like welcome and auth will become tab names
        const MainNavigator = TabNavigator({
            welcome: { screen: WelcomeScreen },
            auth: { screen: AuthScreen },
            main: {
                screen: TabNavigator({
                    map: { screen: MapScreen },
                    deck: { screen: DeckScreen }
                })
            }
        });
        return (
            <View style={styles.container}>
                <MainNavigator />
            </View>
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
