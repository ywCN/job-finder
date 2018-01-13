import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
    // Navigator will check navigationOptions property of this class and use it
    static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        headerRight: (
            <Button
                title="Settings"
                onPress={() => navigation.navigate('settings')}
            />
        )
    });
    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;
