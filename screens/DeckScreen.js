import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swipe from '../components/Swipe';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';

class DeckScreen extends Component {
    renderCard(job) {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        return (
            <Card title={job.jobtitle}>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
                </Text>
            </Card>
        );
    }

    render() {
        return (
            <View>
                <Swipe data={this.props.jobs} renderCard={this.renderCard} />
            </View>
        );
    }
}

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
};

function mapStateToProps({ jobs }) {
    // reduxState.jobs.results
    // check jobs_reducer.js
    return { jobs: jobs.results };
}

export default connect(mapStateToProps)(DeckScreen);
