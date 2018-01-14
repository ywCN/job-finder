import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions'; // import all action creators

class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin(); // one of the action creators
    }
    render() {
        return (
            <View>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
                <Text>AuthScreen</Text>
            </View>
        );
    }
}

export default connect(null, actions)(AuthScreen); // inject all action creators
