import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Icon from './icon/Icon';
import Details from './details/Details';

export default class Workout extends React.Component {
    render() {
        const { workout } = this.props;
        return (
            <View style={styles.container}>
                <Icon icon={workout.icon} />
                <Details workout={workout} active={this.props.active}/>
            </View>
        )
    }
}