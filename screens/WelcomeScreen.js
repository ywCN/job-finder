import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Job Finder' },
    { text: 'Set your location, then swipe away' }
];

class WelcomeScreen extends Component {
    render() {
        return <Slides />;
    }
}

export default WelcomeScreen;
