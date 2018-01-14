import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderSlides() {
        return this.props.data.map(slide => {
            return (
                <View key={slide.text} style={styles.slideStyle}>
                    <Text style={styles.textStyle}>{slide.text}</Text>
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView horizontal={true} style={{ flex: 1 }}>
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30
    }
};

export default Slides;
