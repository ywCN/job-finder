import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DeckScreen extends Component {
    render() {
        return (
            <View>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
                <Text>DeckScreen</Text>
            </View>
        );
    }
}

function mapStateToProps({ jobs }) {
    // reduxState.jobs.results
    // check jobs_reducer.js
    return { jobs: jobs.results };
}

export default connect(mapStateToProps)(DeckScreen);
