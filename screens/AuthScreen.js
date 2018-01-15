import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions'; // import all action creators

class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin(); // one of the action creators
        // AsyncStorage.removeItem('fb_token'); // for testing logout

        // following line is optional for this app, but may be useful for other flows
        // this.onAuthComplete(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('map');
        }
    }

    render() {
        return <View />;
    }
}

function mapStateToProps({ auth }) {
    return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen); // inject all action creators
