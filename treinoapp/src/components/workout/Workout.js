import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Icon from './icon/Icon';

export default class Workout extends React.Component {
    render() {
        const { workout } = this.props;
        return (
            <View style={styles.container}>
                <Icon icon={workout.icon} />
            </View>
        )
    }
}