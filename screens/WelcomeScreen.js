import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Job Finder', color: '#03A9F4' },
    { text: 'Use the app to find a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    // no need to bind
    // navigation is passed as props from App.js by TabNavigator
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    };

    render() {
        return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
    }
}

export default WelcomeScreen;
