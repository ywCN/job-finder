import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Job Finder', color: '#03A9F4' },
    { text: 'Use the app to find a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    state = { token: null };

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            this.props.navigation.navigate('map');
        } else {
            this.setState({ token: false });
        }
    }

    // no need to bind
    // navigation is passed as props in App.js by TabNavigator
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    };

    render() {
        if (_.isNull(this.state.token)) {
            // false will not trigger _.isNull
            return <AppLoading />;
        }
        return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
    }
}

export default WelcomeScreen;
