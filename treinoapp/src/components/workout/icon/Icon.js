import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default class Icon extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.icon} style={styles.icon} />
            </View>
        )
    }
}