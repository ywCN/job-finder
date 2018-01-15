import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
    render() {
        return (
            <View>
                <Swipe data={this.props.jobs} />
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
